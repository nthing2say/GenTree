const Register = () => {
    return (
        <main>
            <section className="hero">
                <div className="content">
                    <h1 className="title">Gen Tree</h1>
                    <form className="formulario">
                        <h2>Datos de Usuario:</h2>
                        <label htmlFor="wallet">Wallet</label>
                        <label htmlFor="name" style={{ marginLeft: "7.6em" }}>Full Name</label>
                        <label htmlFor="email" style={{ marginLeft: "4.5em" }}>Email</label><br></br>
                        <input type="text" placeholder="Wallet" required />
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required /><br /><br /><br />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="content2"></div>
            </section>
        </main>
    )
}
export default Register;