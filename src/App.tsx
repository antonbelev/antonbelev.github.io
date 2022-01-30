import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import WordleBg from './WordleBg'
import * as React from 'react'

function App() {
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
