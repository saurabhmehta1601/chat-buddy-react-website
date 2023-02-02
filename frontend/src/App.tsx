import { BrowserRouter, Route, Routes } from "react-router-dom"
import ChatBot from "./pages/ChatBot"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
