import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Vision from './pages/Vision'
import Mission from './pages/Mission'
import Goals from './pages/Goals'
import HarvestPolicy from './pages/HarvestPolicy'
import Consultations from './pages/Consultations'
import Training from './pages/Training'
import Projects from './pages/Projects'
import GetInTouch from './pages/GetInTouch'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="vision" element={<Vision />} />
          <Route path="mission" element={<Mission />} />
          <Route path="goals" element={<Goals />} />
          <Route path="harvest-policy" element={<HarvestPolicy />} />
          <Route path="consultations" element={<Consultations />} />
          <Route path="training" element={<Training />} />
          <Route path="projects" element={<Projects />} />
          <Route path="get-in-touch" element={<GetInTouch />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App