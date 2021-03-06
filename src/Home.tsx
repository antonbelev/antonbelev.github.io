import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="homeContainer">
      <p className="title">
        Hi, my name is Anton Belev, I'm a software engineer.
      </p>
      <p>
        As you can imagine from this very limited UI, I'm actually more of a
        back-end engineer! I intend to keep this my personal space and link
        projects that I build in my free time. It is rather empty right now...
      </p>

      <p className="title">Side projects:</p>
      <nav>
        <ul>
          <li>
            <Link to="/wordle-bg">Wordle in Bulgarian (Уърдъл 🇧🇬)</Link>

            <p className="spacedP">
              You can find the open-source implementation{' '}
              <a href="https://github.com/antonbelev/antonbelev.github.io">
                here
              </a>
            </p>
            <p>
              This implementation contains over 56,000 valid guesses in
              bulgarian and over 3,700 daily words. You can learn more by
              checking out the README.
            </p>
          </li>
        </ul>
      </nav>

      <p className="title">Contact Details:</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/anton-belev">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/antonbelev">GitHub</a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/1479895/anton-belev">
            Stackoverflow
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Home
