import React, { useState } from "react"
import ChatSection from "./components/ChatSection"
import Header from "./components/Header"
import PromptSubmitForm from "./components/PromptSubmitForm"
import axios from "axios"
import uuid from "react-uuid"

interface IMessage {
  id: string
  sender: "bot" | "user"
  text: string
}

function App() {
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([
    { id: "1", sender: "bot", text: "Hi how can I help you ? " },
    { id: "2", sender: "user", text: "How can I get job at google " },
    { id: "3", sender: "bot", text: "This is not so easy , but are you competitive programmer ? If yes it can be helpful since you must be good at data structures and algorithms which is very important" }
  ])

  const handlePromptSubmission = async (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim() === "") return

    try {

      const userMessageId = uuid()
      setMessages(messages => [...messages, { id: userMessageId, sender: "user", text: prompt }])

      const completionResponse = await axios.post('http://localhost:8000/get-completion', { prompt }, {
        headers: {
          'Content-Type': "application/json"
        }
      })
      const { id, autoComplete } = completionResponse.data
      setMessages(messages => [...messages, { id, sender: "bot", text: autoComplete }])
    } catch (error) {

    }

  }
  return (
    <div className="h-screen max-w-3xl mx-auto flex flex-col ">
      <Header />
      <ChatSection messages={messages} />
      <PromptSubmitForm
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={handlePromptSubmission}
      />
    </div>

  )
}

export default App
