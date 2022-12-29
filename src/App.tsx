import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import WordleBg from './WordleBg'
import * as React from 'react'
import ReactGA from 'react-ga4'

function App() {
  ReactGA.initialize('G-XDLQBM4P5K')
  ReactGA.send('pageview')
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="wordle-bg" element={<WordleBg />} />
      </Routes>
    </HashRouter>
  )
}

export default App
