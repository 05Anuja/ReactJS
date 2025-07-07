import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="logo">
                <h3>AP</h3>
            </div>
            <div className="nav">
                <ul className="nav-links">
                    <li className="links">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="links">
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li className="links">
                        <Link to="/posts">POSTS</Link>
                    </li>
                    <li className="links">
                        <Link to="/dashboard">DASHBOARD</Link>
                    </li>
                    <li className="links">
                        <Link to="/counter">COUNTER</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar