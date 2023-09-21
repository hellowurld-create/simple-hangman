/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import Words from './wordList.json'

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
        return Words[Math.floor(Math.random() * Words.length)]
  })
 
  const [guessSetLetters, setGuessSetLetters] = useState<string[]>([])

  return (
   
    
      <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
      alignItems: "center",
      background: "black",
        color:"white"
      }}
      >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing/>
      <HangmanWord />
      <Keyboard/>
      </div>
  )
}

export default App
