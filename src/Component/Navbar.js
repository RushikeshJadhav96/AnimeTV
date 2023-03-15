import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">
                Home
            </Link>
        </li>
        <li>
            <Link to="movies">
                Movies
            </Link>
        </li>
        <li>
            <Link to="tv-series">
                TV-Series
            </Link>
        </li>
        <li>
            <Link to="mylist">
                MyList
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
