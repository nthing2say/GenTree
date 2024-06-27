import { useState } from "react";

const Register = () => {
    const [inputs, setInputs] = useState({
        wallet: "",
        name: "",
        email: ""
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <main>
            <section className="hero">
                <div className="content">
                    <h1 className="title">Gen Tree</h1>
                    <form onSubmit={handleSubmit} className="formulario">
                        <label htmlFor="wallet">Wallet: </label>
                        <input
                            id="wallet"
                            type="text"
                            name="wallet"
                            value={inputs.wallet || ""}
                            onChange={handleChange}
                            placeholder="Wallet"
                            required
                        />

                        <label htmlFor="name">Full Name: </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={inputs.name || ""}
                            onChange={handleChange}
                            placeholder="Full Name" required 
                        />

                        <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                placeholder="Email" required 
                            />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="content2"></div>
            </section>
        </main>
    )
}
export default Register;