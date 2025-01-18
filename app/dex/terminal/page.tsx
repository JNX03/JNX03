"use client"

import React, { useState, useRef, useEffect } from 'react'
import { 
  ASCII_ART, 
  initialFileSystem, 
  commands, 
  decodeBase64, 
  validatePath,
  users,
  databases,
  hints,
  checkPermissions,
  decryptQuantum
} from './utils'

export default function Terminal() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>([
    ASCII_ART,
    '\nWelcome to JNX OS Terminal v1.0.0',
    'Type "help" for available commands.\n'
  ])
  const [currentPath, setCurrentPath] = useState('/home/visitor')
  const [currentUser, setCurrentUser] = useState('visitor')
  const [isRoot, setIsRoot] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [sudoPassword, setSudoPassword] = useState<string>('')
  const [awaitingSudo, setAwaitingSudo] = useState(false)
  const [sudoCommand, setSudoCommand] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [output])

  const addOutput = (text: string) => {
    setOutput(prev => [...prev, text])
  }

  const handleSudoAttempt = (password: string) => {
    if (users[currentUser]?.sudoer && password === users[currentUser]?.password) {
      setIsRoot(true)
      handleCommand(sudoCommand)
    } else {
      addOutput('Sorry, try again.')
    }
    setAwaitingSudo(false)
    setSudoCommand('')
    setSudoPassword('')
  }

  const executeScript = async (script: string) => {
    const scriptFile = initialFileSystem[`${currentPath}/${script}`] || 
                 initialFileSystem[`/usr/bin/${script}`]

    if (!scriptFile || !['executable', 'file'].includes(scriptFile.type)) {
      addOutput(`${script}: No such file or executable`)
      return
    }

    if (!checkPermissions(scriptFile, currentUser, isRoot)) {
      addOutput(commands.permissionDenied())
      return
    }

    if (script === '1x12.bat' && isRoot) {
      addOutput('Executing 1x12 Protocol...')
      await new Promise(resolve => setTimeout(resolve, 1000))
      addOutput('Quantum state: SUPERPOSITION')
      await new Promise(resolve => setTimeout(resolve, 1000))
      addOutput('Reality breach detected...')
      await new Promise(resolve => setTimeout(resolve, 1000))
      addOutput(`
Project 1x12: Quantum Computing Initiative
Status: IN DEVELOPMENT
Description: A revolutionary quantum computing project that aims to
            break the barriers between classical and quantum computing.
            
WARNING: This project exists in multiple states simultaneously.
        Proper quantum shielding required for further access.
`)
    } else {
      addOutput(scriptFile.content || '')
    }
  }

  const handleCommand = async (fullCommand: string) => {
    const args = fullCommand.trim().split(' ')
    const cmd = args[0].toLowerCase()
    const params = args.slice(1)

    if (awaitingSudo) {
      handleSudoAttempt(fullCommand)
      return
    }

    switch (cmd) {
      case 'help':
        addOutput(commands.help())
        break

      case 'clear':
        setOutput([])
        break

      case 'ls':
        const showHidden = params.includes('-a')
        const files = Object.entries(initialFileSystem)
          .filter(([path]) => {
            const parentPath = path.substring(0, path.lastIndexOf('/') || 1)
            return parentPath === currentPath
          })
          .map(([path, info]) => {
            const name = path.split('/').pop() || ''
            return info.hidden && !showHidden ? '' : name
          })
          .filter(Boolean)
        addOutput(files.join('  '))
        break

      case 'cd':
        const newPath = params[0]
        if (!newPath) {
          setCurrentPath('/home/visitor')
          break
        }
        const fullPath = newPath.startsWith('/') ? newPath : `${currentPath}/${newPath}`
        const normalizedPath = fullPath.replace(/\/+/g, '/')
        
        if (!validatePath(normalizedPath)) {
          addOutput(commands.invalidPath())
          break
        }
        
        if (initialFileSystem[normalizedPath]?.type === 'directory') {
          setCurrentPath(normalizedPath)
        } else {
          addOutput(commands.invalidPath())
        }
        break

      case 'pwd':
        addOutput(currentPath)
        break

      case 'cat':
        const filePath = params[0]?.startsWith('/') ? params[0] : `${currentPath}/${params[0]}`
        const catFile = initialFileSystem[filePath]
        
        if (!catFile || catFile.type !== 'file') {
          addOutput('File not found')
          break
        }
        
        if (catFile.encrypted) {
          addOutput('This file is encrypted. Use decode <key> <content> to read it.')
          break
        }
        
        addOutput(catFile.content || '')
        break

      case 'decode':
        const [key, ...textParts] = params
        const text = textParts.join(' ')
        
        if (!key || !text) {
          addOutput('Usage: decode <key> <text>')
          break
        }
        
        if (key === 'yuki') {
          const decoded = decodeBase64(text)
          if (decoded.includes('Yuki')) {
            addOutput('🎉 Congratulations! You found the secret!')
            addOutput('Coming Soon: Yuki AI Chan - Your Personal AI Assistant')
            addOutput('https://github.com/JNX03/Yuki-Ai-Chan')
          } else {
            addOutput('Incorrect decoding')
          }
        } else if (key === 'schrodinger') {
          addOutput(decryptQuantum(text, key))
        } else {
          addOutput('Invalid key')
        }
        break

      case 'about':
        addOutput(initialFileSystem['/home/visitor/about.txt'].content || '')
        break

      case 'projects':
        addOutput(initialFileSystem['/home/visitor/projects.txt'].content || '')
        break

      case 'social':
        addOutput(initialFileSystem['/home/visitor/social.txt'].content || '')
        break

      case 'hint':
        addOutput(hints[Math.floor(Math.random() * hints.length)])
        break

      case 'sudo':
        if (!users[currentUser]?.sudoer) {
          addOutput('User is not in the sudoers file. This incident will be reported.')
          break
        }
        setAwaitingSudo(true)
        setSudoCommand(params.join(' '))
        addOutput('[sudo] password for ' + currentUser + ':')
        break

      case 'su':
        const targetUser = params[0] || 'root'
        if (targetUser === 'root' && !isRoot) {
          addOutput('Permission denied')
          break
        }
        if (users[targetUser]) {
          setCurrentUser(targetUser)
          setIsRoot(targetUser === 'root')
          addOutput(`Switched to ${targetUser}`)
        } else {
          addOutput('Unknown user')
        }
        break

      case 'psql':
        if (!isRoot && params.includes('secret')) {
          addOutput('Permission denied: Quantum authentication required')
          break
        }
        const dbName = params.includes('-d') ? 
          params[params.indexOf('-d') + 1] : 'main'
        const db = databases[dbName]
        if (db) {
          if (db.encrypted && !isRoot) {
            addOutput('Connection failed: Database is quantum encrypted')
          } else {
            addOutput(`Connected to ${db.name} at ${db.host}:${db.port}`)
            if (dbName === '1x12_db') {
              addOutput(`
WARNING: QUANTUM STATE DETECTED
Table: quantum_experiments
Data: SUPERPOSITION
Note: Data may change when observed
`)
            }
          }
        } else {
          addOutput('Database not found')
        }
        break

      case 'ssh':
        const [user, host] = params[0]?.split('@') || []
        if (host === '192.168.1.12') {
          if (!isRoot) {
            addOutput('Permission denied: Quantum key authentication required')
          } else {
            addOutput('Connected to Quantum Research Server')
            addOutput('Project 1x12 Development Environment')
          }
        } else {
          addOutput('ssh: connect to host failed')
        }
        break

      case 'chmod':
        if (!isRoot) {
          addOutput(commands.needRoot())
          break
        }
        const [mode, fileName] = params
        const chmodFilePath = fileName?.startsWith('/') ? fileName : `${currentPath}/${fileName}`
        if (initialFileSystem[chmodFilePath]) {
          initialFileSystem[chmodFilePath].permission = parseInt(mode, 8)
          addOutput(`Changed permissions of ${fileName} to ${mode}`)
        } else {
          addOutput('File not found')
        }
        break

      case './':
      case '.':
        const scriptName = params[0] || args[0].slice(2)
        await executeScript(scriptName)
        break

      case 'exit':
        window.history.back()
        break

      default:
        addOutput(commands.notfound(cmd))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setOutput(prev => [...prev, `\n${currentUser}@jnx03:${currentPath}$ ${input}\n`])
    handleCommand(input)
    setHistory(prev => [...prev, input])
    setHistoryIndex(-1)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#1B2B34] text-green-400 p-4 font-mono">
      <div 
        ref={outputRef}
        className="whitespace-pre-wrap mb-4 overflow-auto"
        style={{ maxHeight: 'calc(100vh - 60px)' }}
      >
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="mr-2">{`${currentUser}@jnx03:${currentPath}$`}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none"
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}

