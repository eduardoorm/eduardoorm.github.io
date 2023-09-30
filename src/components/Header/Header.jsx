import React from 'react'
import "./Header.css"
export const Header = () => {
  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='#about'><li>About</li></a>
            <a href='#projects'><li>Projects</li></a>
            <a href='#footer'><li>Contact</li></a>
        </nav>
    </div>

  )
}
