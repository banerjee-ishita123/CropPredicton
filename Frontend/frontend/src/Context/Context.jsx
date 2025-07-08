import { createContext, useState } from "react"
import run from "../Config/gemini"

export const Context = createContext()

const ContextProvider = (props) => {
  const [input, setInput] = useState("")
  const [recentPrompt, setRecentPrompt] = useState("")
  const [prevPrompt, setPrevPrompt] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState("")

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord)
    }, 75 * index)
  }

  const newChat = () => {
    setLoading(false)
    setShowResult(false)
    setResultData("")
    setInput("")
  }

  const onSent = async (promptText) => {
    const prompt = promptText || input
    if (!prompt.trim()) return

    setResultData("")
    setLoading(true)
    setShowResult(true)

    setPrevPrompt((prev) => [...prev, prompt])
    setRecentPrompt(prompt)

    try {
      const response = await run(prompt)

      let responseArray = response.split("**")
      let newResponse = ""

      for (let i = 0; i < responseArray.length; i++) {
        newResponse += i % 2 === 1
          ? `<b>${responseArray[i]}</b>`
          : responseArray[i]
      }

      const formatted = newResponse.split("*").join("</br>").split(" ")

      formatted.forEach((word, index) => delayPara(index, word + " "))
    } catch (error) {
      setResultData("Error occurred while fetching response.")
      console.error("Gemini error:", error)
    }

    setLoading(false)
    setInput("")
  }

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    newChat,
  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
