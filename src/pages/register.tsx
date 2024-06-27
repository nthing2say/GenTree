import { useState } from "react";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
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
     
        const username = inputs.username.trim()
        const name = inputs.name.trim()
        const email = inputs.email.trim()
        if (username && email && name) {
          fetch("endpoint a recibir", {
            method: "POST",
            body: JSON.stringify({
              username,
              name,
              email,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then(response => response.json())
            .then(data => {
                return setInputs(data);
            })
        }
      }
    return (
        <main>
            <section className="hero">
                <div className="content">
                    <h1 className="title">Gen Tree</h1>
                    <form onSubmit={handleSubmit} className="formulario">
                        <label htmlFor="username">Nombre de Usuario: </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={inputs.username || ""}
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