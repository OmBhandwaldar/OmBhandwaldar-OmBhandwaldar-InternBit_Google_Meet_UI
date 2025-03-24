import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MainComponent from './components/MainComponent'
import Navbar from './components/Navbar'
import MeetingRoom from './components/MeetingRoom'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <MainComponent />
            </>
          } />
          <Route path="/meeting" element={<MeetingRoom />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
