import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className="logo">
        <img src="https://edify.pk/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=75" alt="" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  )
}

export default NavBar