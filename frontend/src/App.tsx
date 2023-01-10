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
  loading: boolean
}

function App() {
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([
    { id: "1", sender: "bot", text: "Hi how can I help you ? ", loading: false },
  ])

  const handlePromptSubmission = async (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim() === "") return

    try {
      const userMessageId = uuid()
      const userPromptMessage: IMessage = { id: userMessageId, sender: "user", text: prompt, loading: false }
      setMessages(messages => [...messages, userPromptMessage])
      const botCompletionLoadingMessageId = uuid()

      const botCompletionLoadingMessage: IMessage = { id: botCompletionLoadingMessageId, sender: "bot", loading: true, text: '' }
      setMessages(messages => [...messages, botCompletionLoadingMessage])

      setPrompt('')

      const completionResponse = await axios.post('https://ai-buddy-chatgpt-web-app.onrender.com/get-completion', { prompt }, {
        headers: {
          'Content-Type': "application/json"
        }
      })
      const { id, autoComplete } = completionResponse.data
      setMessages(messages => [
        ...messages.filter(msg => msg.id !== botCompletionLoadingMessageId),
        { id, sender: "bot", text: autoComplete.trim(), loading: false }])
    } catch (error) {
      const errorMessageId = uuid()
      setMessages(messages => [
        ...messages.filter(msg => msg.loading === false),
        { id: errorMessageId, text: "Sorry I could not get response 😭", sender: "bot", loading: false }
      ])
    }

  }
  return (
    <div className="h-screen max-w-3xl mx-auto flex flex-col ">
      <Header />
      <ChatSection

        messages={messages} />
      <PromptSubmitForm
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={handlePromptSubmission}
      />
    </div>

  )
}

export default App
