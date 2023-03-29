import React from 'react'

export const Navbar = () => {
   return (
        <div>
          <div className='navbar'>
            <a href='/about'><button className='navbar-button'>About me</button></a>
            <a href='/skills'><button className='navbar-button'>Skills</button></a>
            <a href='/projects'><button className='navbar-button'>Projects</button></a>
            <a href='/contacts'><button className='navbar-button'>Contact me</button></a>
          </div>
        </div>
      )
}
