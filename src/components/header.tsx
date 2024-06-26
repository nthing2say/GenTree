import Logo from './../assets/logo_gentree1.png';
const Header = ()=>{
    return(
        <header>
        <img src= {Logo} alt="Logo" className="logo" />
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