import { ConnectButton } from "thirdweb/react";
import { client, myChain } from "./../lib/thirdwebClient";
import { useNavigate } from "react-router-dom";
import { createWallet } from "thirdweb/wallets";
const Home = () => {
    const wallets = [
        createWallet("io.metamask"),
        createWallet("com.coinbase.wallet"),
        createWallet("me.rainbow"),
    ];

    const navigate = useNavigate()
//    const handleRedirect = () => {
     //   return navigate("/register")
  //  }
    const handleRedirectHome = () => {
        return navigate("/")
    }
    return (
        <main>
            <section className="hero">
                <div className="content">
                    <h1 className="title">Gen Tree</h1>
                    <p className="slogan">Preserva tu Historia,<br /> Asegura tu Futuro</p>

                    <ConnectButton
                        wallets={wallets}
                        onDisconnect={handleRedirectHome}
                       // onConnect={handleRedirect}
                        connectButton={{
                            label: "Regístrate Gratis",
                            className: "register-button",
                        }}
                        client={client}
                        chain={myChain}
                        appMetadata={{
                            name: "Example App",
                            url: "https://example.com",
                        }}
                    />
                </div>
                <div className="content2"></div>
            </section>
        </main>

    )
}

export default Home