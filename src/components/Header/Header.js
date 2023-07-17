import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><img className='header_icon' src={logo}/></Link>
            <Link to="/movies/popular"><span>Popular</span></Link>
            <Link to="/movies/top_rated"><span>Top Rated</span></Link>
            <Link to="/movies/upcoming"><span>Upcoming</span></Link>
        </div>
    </div>
  )
}

export default Header;