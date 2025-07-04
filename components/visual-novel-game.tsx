"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { VRM, VRMUtils } from "@pixiv/three-vrm"

interface GameState {
  scene: string
  choices: string[]
  background: string
}

const gameScenes: Record<string, GameState> = {
  start: {
    scene:
      "Syntaxia-chan discovers that her classmate, Yuki-Ai chan, has been sucked into the Matrix computer and lost her sanity.",
    choices: ["Try to help Yuki-Ai chan", "Investigate further"],
    background: "/backgrounds/classroom.jpg",
  },
  investigate: {
    scene: "Syntaxia-chan searches Yuki-Ai chan's room and finds a mysterious headset under her bed.",
    choices: ["Put on the headset", "Look for more clues"],
    background: "/backgrounds/bedroom.jpg",
  },
  enterMatrix: {
    scene:
      "Syntaxia-chan puts on the headset and is transported into the internet world. She sees lines of code everywhere.",
    choices: ["Learn Python", "Learn Swift"],
    background: "/backgrounds/matrix.jpg",
  },
  learnPython: {
    scene: "Syntaxia-chan starts learning Python, facing challenges and solving puzzles in the digital realm.",
    choices: ["Continue learning", "Look for Yuki-Ai chan"],
    background: "/backgrounds/python.jpg",
  },
  learnSwift: {
    scene: "Syntaxia-chan dives into Swift programming, creating simple apps and games in the virtual world.",
    choices: ["Continue learning", "Look for Yuki-Ai chan"],
    background: "/backgrounds/swift.jpg",
  },
  findYuki: {
    scene:
      "After mastering programming basics, Syntaxia-chan finally locates Yuki-Ai chan, who appears to be trapped in a complex AI system.",
    choices: ["Use Python to hack the system", "Use Swift to create a rescue app"],
    background: "/backgrounds/ai_system.jpg",
  },
  rescueYuki: {
    scene:
      "Using her newfound programming skills, Syntaxia-chan manages to break through the AI system and reach Yuki-Ai chan.",
    choices: ["Attempt to restore Yuki's sanity", "Bring Yuki back to the real world"],
    background: "/backgrounds/rescue.jpg",
  },
  ending: {
    scene:
      "Syntaxia-chan successfully restores Yuki-Ai chan's sanity and brings her back to the real world. They both wake up, their friendship stronger than ever.",
    choices: ["Play again"],
    background: "/backgrounds/ending.jpg",
  },
}

export function VisualNovelGame() {
  const [currentScene, setCurrentScene] = useState<GameState>(gameScenes.start)
  const [yukiModel, setYukiModel] = useState<VRM | null>(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      "https://notex.jnx03.xyz/Yuki.vrm",
      (gltf) => {
        VRMUtils.removeUnnecessaryJoints(gltf.scene)
        VRM.from(gltf).then((vrm) => {
          setYukiModel(vrm)
        })
      },
      (progress) => console.log("Loading model...", 100.0 * (progress.loaded / progress.total), "%"),
      (error) => console.error(error),
    )
  }, [])

  const handleChoice = (choice: string) => {
    switch (currentScene.scene) {
      case gameScenes.start.scene:
        if (choice === "Try to help Yuki-Ai chan") setCurrentScene(gameScenes.investigate)
        else if (choice === "Investigate further") setCurrentScene(gameScenes.investigate)
        break
      case gameScenes.investigate.scene:
        if (choice === "Put on the headset") setCurrentScene(gameScenes.enterMatrix)
        else if (choice === "Look for more clues") setCurrentScene(gameScenes.enterMatrix)
        break
      case gameScenes.enterMatrix.scene:
        if (choice === "Learn Python") setCurrentScene(gameScenes.learnPython)
        else if (choice === "Learn Swift") setCurrentScene(gameScenes.learnSwift)
        break
      case gameScenes.learnPython.scene:
      case gameScenes.learnSwift.scene:
        if (choice === "Look for Yuki-Ai chan") setCurrentScene(gameScenes.findYuki)
        break
      case gameScenes.findYuki.scene:
        setCurrentScene(gameScenes.rescueYuki)
        break
      case gameScenes.rescueYuki.scene:
        setCurrentScene(gameScenes.ending)
        break
      case gameScenes.ending.scene:
        if (choice === "Play again") setCurrentScene(gameScenes.start)
        break
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Syntaxia's Adventure</CardTitle>
        <CardDescription>Help Syntaxia-chan save Yuki-Ai chan from the Matrix!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video mb-4">
          <Image src={currentScene.background || "/placeholder.svg"} alt="Game scene" layout="fill" objectFit="cover" />
          {yukiModel && (
            <div className="absolute bottom-0 right-0 w-1/3 h-full">{/* Render Yuki-Ai chan model here */}</div>
          )}
        </div>
        <p className="mb-4">{currentScene.scene}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {currentScene.choices.map((choice, index) => (
          <Button key={index} onClick={() => handleChoice(choice)}>
            {choice}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
