const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>Sobre Gen Tree</h3>
                    <p>Gen Tree is a platform dedicated to preserving family history and ensuring the future of your descendants.</p>
                    <p>in us and start creating your family tree today.</p>
                </div>
                <div className="footer-section links">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="register.html">Register</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contacto</h3>
                    <p><i className="fas fa-phone"></i> +1 234 567 890</p>
                    <p><i className="fas fa-envelope"></i> info@gentree.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Gen Tree. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
export default Footer;