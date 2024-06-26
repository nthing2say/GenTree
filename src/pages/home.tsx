 import { ConnectButton, ConnectButton_connectButtonOptions } from "thirdweb/react";
import { client,myChain } from "./../lib/thirdwebClient";
type connectButton = ConnectButton_connectButtonOptions;
const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="content">
                    <h1 className="title">Gen Tree</h1>
                    <p className="slogan">Preserva tu Historia,<br /> Asegura tu Futuro</p>
                     <ConnectButton
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