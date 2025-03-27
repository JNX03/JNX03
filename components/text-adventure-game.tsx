"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface GameState {
  scene: string
  choices: string[]
}

const gameScenes: Record<string, GameState> = {
  start: {
    scene: "You find yourself in a dark forest. There's a path leading north and a mysterious cave to the east.",
    choices: ["Go north", "Enter the cave", "Stay put"],
  },
  north: {
    scene: "You come across a clearing with an old well in the center. There's a rope hanging down into it.",
    choices: ["Climb down the well", "Return to the forest", "Drink from the well"],
  },
  cave: {
    scene:
      "The cave is dimly lit by glowing mushrooms. You see strange markings on the walls and hear distant whispers.",
    choices: ["Investigate the markings", "Follow the whispers", "Leave the cave"],
  },
  well: {
    scene: "At the bottom of the well, you find an ancient artifact. It pulses with an otherworldly energy.",
    choices: ["Take the artifact", "Leave it alone", "Climb back up"],
  },
  artifact: {
    scene:
      "As you grasp the artifact, you're enveloped in a bright light. You've unlocked its power and completed your quest!",
    choices: ["Play again"],
  },
}

export function TextAdventureGame() {
  const [currentScene, setCurrentScene] = useState<GameState>(gameScenes.start)

  const handleChoice = (choice: string) => {
    switch (currentScene.scene) {
      case gameScenes.start.scene:
        if (choice === "Go north") setCurrentScene(gameScenes.north)
        else if (choice === "Enter the cave") setCurrentScene(gameScenes.cave)
        break
      case gameScenes.north.scene:
        if (choice === "Climb down the well") setCurrentScene(gameScenes.well)
        else if (choice === "Return to the forest") setCurrentScene(gameScenes.start)
        break
      case gameScenes.cave.scene:
        if (choice === "Leave the cave") setCurrentScene(gameScenes.start)
        break
      case gameScenes.well.scene:
        if (choice === "Take the artifact") setCurrentScene(gameScenes.artifact)
        else if (choice === "Climb back up") setCurrentScene(gameScenes.north)
        break
      case gameScenes.artifact.scene:
        if (choice === "Play again") setCurrentScene(gameScenes.start)
        break
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Forest Mystery</CardTitle>
        <CardDescription>A text-based adventure game</CardDescription>
      </CardHeader>
      <CardContent>
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

