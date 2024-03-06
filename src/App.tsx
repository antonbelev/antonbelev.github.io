import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import GuessTheWordBg from './GuessTheWordBg'
import AiGames from './AiGames'
//import TicTacToe from './games/TicTacToe'
//import BullsAndCows from './games/BullsAndCows'
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
        <Route path="guess-the-word-bg" element={<GuessTheWordBg />} />
        <Route path="ai-games" element={<AiGames />} />
        <Route
          path="ai-games/tic-tac-toe"
          element={() => {
            window.location.href = 'games/tictactoe/index.html'
          }}
        />
      </Routes>
    </HashRouter>
  )
}

export default App
