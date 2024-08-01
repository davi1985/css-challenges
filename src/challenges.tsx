import { Link } from 'react-router-dom'

import './index.scss'

export const ChallengesList = () => (
  <div className="list">
    <h1>CSS Challenges</h1>

    <ul>
      <li>
        <Link to={'/day-01'}>Challenge 001</Link>
      </li>
      <li>
        <Link to={'/day-02'}>Challenge 002</Link>
      </li>
    </ul>
  </div>
)
