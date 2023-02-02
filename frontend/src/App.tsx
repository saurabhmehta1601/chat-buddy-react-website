import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import PageLayout from "./components/PageLayout"
import ChatBotPage from "./pages/ChatBotPage"
import CoursesPage from "./pages/CoursesPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatBotPage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>

      </PageLayout>
    </BrowserRouter>
  )
}

export default App
