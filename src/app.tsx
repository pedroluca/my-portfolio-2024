import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { Home } from "./pages/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}