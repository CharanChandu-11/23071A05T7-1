import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App