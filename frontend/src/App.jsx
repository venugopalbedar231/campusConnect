import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Notices from './pages/Notices.jsx'
import Users from './pages/Users.jsx'
import EventDetails from './pages/EventDetails.jsx'
import NoticeDetails from './pages/NoticeDetails.jsx'
import Register from './pages/Register.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/events/:id" element={<EventDetails/>} />
            <Route path="/notices" element={<Notices/>} />
            <Route path="/notices/:id" element={<NoticeDetails/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App