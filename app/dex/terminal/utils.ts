export const ASCII_ART = `
     ██╗███╗   ██╗██╗  ██╗ ██████╗ ██████╗ 
     ██║████╗  ██║╚██╗██╔╝██╔═████╗╚════██╗
     ██║██╔██╗ ██║ ╚███╔╝ ██║██╔██║ █████╔╝
██   ██║██║╚██╗██║ ██╔██╗ ████╔╝██║██╔═══╝ 
╚█████╔╝██║ ╚████║██╔╝ ██╗╚██████╔╝███████╗
 ╚════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
`

interface User {
  username: string;
  password: string;
  sudoer: boolean;
}

export const users: { [key: string]: User } = {
  visitor: { username: 'visitor', password: '', sudoer: false },
  root: { username: 'root', password: 'x0r3ncrypt3d', sudoer: true },
  jnx: { username: 'jnx', password: '1x12_master_key', sudoer: true }
}

interface DatabaseConfig {
  host: string;
  port: number;
  name: string;
  encrypted: boolean;
  key?: string;
}

export const databases: { [key: string]: DatabaseConfig } = {
  'main': {
    host: 'localhost',
    port: 5432,
    name: 'jnx_projects',
    encrypted: false
  },
  'secret': {
    host: '192.168.1.12',
    port: 1337,
    name: '1x12_db',
    encrypted: true,
    key: 'quantum_entangled'
  }
}

export interface FileSystem {
  [key: string]: {
    type: 'file' | 'directory' | 'executable' | 'link'
    content?: string
    hidden?: boolean
    encrypted?: boolean
    key?: string
    permission?: number
    owner?: string
    target?: string
    requires_root?: boolean
  }
}

export const initialFileSystem: FileSystem = {
  '/': { type: 'directory', permission: 0o755 },
  '/home': { type: 'directory', permission: 0o755 },
  '/home/visitor': { type: 'directory', permission: 0o700 },
  '/home/visitor/.secret': { type: 'directory', hidden: true, permission: 0o700 },
  '/home/visitor/.secret/encrypted.txt': { 
    type: 'file', 
    content: 'WVVoU01HTklUVFpNZVRsNVdWaGpkVm95YkRCaFNGWnBaRmhPYkdOdFRuWmlibEYx', 
    hidden: true,
    encrypted: true,
    key: 'yuki',
    permission: 0o600
  },
  '/home/visitor/.secret/.db_config': {
    type: 'file',
    content: 'Connection string: pgsql://secret@192.168.1.12:1337/1x12_db',
    hidden: true,
    permission: 0o600
  },
  '/root': { type: 'directory', permission: 0o700, requires_root: true },
  '/root/.ssh': { type: 'directory', permission: 0o700, requires_root: true },
  '/root/.ssh/id_rsa': {
    type: 'file',
    content: '-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEA3Tz2mr7SZiAMfQyuvBjM9Oi...\n-----END RSA PRIVATE KEY-----',
    permission: 0o600,
    requires_root: true
  },
  '/usr': { type: 'directory', permission: 0o755 },
  '/usr/bin': { type: 'directory', permission: 0o755 },
  '/usr/bin/connect.sh': {
    type: 'executable',
    content: 'echo "Connecting to database..."\nsleep 2\necho "Access denied. Root privileges required."',
    permission: 0o755
  },
  '/usr/bin/1x12.bat': {
    type: 'executable',
    content: `@echo off
echo Initializing 1x12 Protocol...
echo Quantum state: SUPERPOSITION
echo Warning: Reality breach detected
echo Loading Project 1x12...`,
    permission: 0o755,
    requires_root: true
  },
  '/var': { type: 'directory', permission: 0o755 },
  '/var/log': { type: 'directory', permission: 0o755 },
  '/var/log/auth.log': {
    type: 'file',
    content: 'Failed root login attempt from 192.168.1.12 - invalid quantum signature',
    permission: 0o644
  },
  '/home/visitor/about.txt': { 
    type: 'file', 
    content: `Name: Jean (JNX03)
OS: JNX
Interests: Everything
Currently Learning: Everything I can get my hands on!
Goal: Make the world better with cool tech stuff`,
    permission: 0o644
  },
  '/home/visitor/projects.txt': {
    type: 'file',
    content: `1. Notex - High school study notes platform
2. Nova - AI Auto Pentesting Platform
3. EibrailleNext - Blind Learning Platform
4. Yuki AI Chan - Coming Soon...
5. [REDACTED] - [ACCESS LEVEL: ROOT REQUIRED]`,
    permission: 0o644
  },
  '/home/visitor/.bash_history': {
    type: 'file',
    content: 'ssh root@192.168.1.12\npsql -h localhost -p 5432 -U jnx\n./1x12.bat\ncat /var/log/auth.log',
    hidden: true,
    permission: 0o600
  },
  '/home/visitor/.quantum_state': {
    type: 'file',
    content: 'Quantum Entanglement Status: ACTIVE\nTarget: Project 1x12\nWarning: DO NOT OBSERVE',
    hidden: true,
    encrypted: true,
    key: 'schrodinger',
    permission: 0o600
  }
}

export const commands = {
  help: () => `Available commands:
  ls [-la] - List directory contents
  cd <dir> - Change directory
  pwd - Print working directory
  cat <file> - Display file contents
  clear - Clear terminal
  about - Display about information
  projects - List projects
  social - Show social links
  sudo <command> - Execute command as superuser
  su [username] - Switch user
  chmod <permissions> <file> - Change file permissions
  ./[script] - Execute script
  psql - PostgreSQL client
  ssh <user@host> - SSH client
  hint - Get a hint
  decode <key> <text> - Decode encrypted text
  exit - Exit terminal`,
  
  notfound: (cmd: string) => `Command not found: ${cmd}. Type 'help' for available commands.`,
  permissionDenied: () => 'Permission denied.',
  invalidPath: () => 'Invalid path.',
  needRoot: () => 'This operation requires root privileges. Use sudo.',
}

export const hints = [
  'The quantum state of a system remains unknown until observed...',
  'Project 1x12 exists in multiple states simultaneously.',
  'Some paths are hidden, some files are encrypted, and some truths are quantum.',
  'Check the .bash_history for clues about previous activities.',
  'Database connections might reveal more than they seem.',
  'The key to quantum encryption lies in Schrödinger\'s famous thought experiment.'
]

export const decodeBase64 = (str: string): string => {
  try {
    return atob(str)
  } catch {
    return 'Invalid base64 string'
  }
}

export const validatePath = (path: string): boolean => {
  return path.startsWith('/') && !path.includes('..')
}

export const checkPermissions = (
  file: FileSystem[string], 
  user: string, 
  isRoot: boolean
): boolean => {
  if (isRoot) return true
  if (file.requires_root && !isRoot) return false
  
  const permission = file.permission || 0o644
  const isOwner = file.owner === user
  
  if (isOwner) {
    return (permission & 0o400) !== 0 // Check owner read permission
  }
  
  return (permission & 0o004) !== 0 // Check others read permission
}

export const decryptQuantum = (content: string, key: string): string => {
  if (key === 'schrodinger') {
    return `Project 1x12 Status: QUANTUM ENTANGLED
    
Location: SUPERPOSITION
Purpose: [REDACTED]
Warning: Direct observation may collapse the quantum state

To proceed, you must:
1. Establish quantum-secure connection (port 1337)
2. Execute 1x12.bat with root privileges
3. Maintain quantum coherence

DO NOT ATTEMPT WITHOUT PROPER QUANTUM SHIELDING`
  }
  return 'Quantum state collapsed. Retry in another universe.'
}

