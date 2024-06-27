import Logo from './../assets/logo_gentree1.png';
import { Link } from 'react-router-dom';
const Header = ()=>{
    return(
        <header>
          <Link to="/"> <img src= {Logo} alt="Logo" className="logo" /></Link>  
        <nav>
            <ul id="nav-links" className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="hamburger" id="hamburger">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    </header>
    )
}
export default Header;