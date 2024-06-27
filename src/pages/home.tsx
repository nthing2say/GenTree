 import { ConnectButton} from "thirdweb/react";
import { client,myChain } from "./../lib/thirdwebClient";
import { useNavigate } from "react-router-dom";
 const Home = () => {
    const navigate = useNavigate()
    const handleRedirect=()=>{
       return navigate("/register") 
    }
    const handleRedirectHome = ()=>{
        return navigate("/") 
    }
    return (
        <main>
            <section className="hero">
                <div className="content">
                    <h1 className="title">Gen Tree</h1>
                    <p className="slogan">Preserva tu Historia,<br /> Asegura tu Futuro</p>
                    <button   onClick={handleRedirect}>
                     <ConnectButton
                     onDisconnect={handleRedirectHome}
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
                </button>
                </div>
                <div className="content2"></div>
            </section>
        </main>

    )
}

export default Home