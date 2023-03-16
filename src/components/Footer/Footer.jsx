import "./footer.css"
import logo from "../../assets/logo.png"
import { SocialIcon } from "react-social-icons"

function Footer(){
    return (
        <footer className="footer">
            <div className="categoria">
                <h6>Categorías</h6>
                <ul>
                    <li>Ojos</li>
                    <li>Labios</li>
                    <li>Rostro</li>
                    <li>Brochas</li>
                </ul>
            </div>
            <div>
                <ul className="redes">
                    <li><SocialIcon network="instagram" bgColor="#f6549c" style={{ height: 40, width: 40 }}/></li>
                    <li><SocialIcon network="facebook" bgColor="#f6549c" style={{ height: 40, width: 40 }}/></li>
                    <li><SocialIcon network="pinterest" bgColor="#f6549c" style={{ height: 40, width: 40 }}/></li>
                </ul>
            </div>
            <div>
                <img src={logo} alt="logo" className="logofoot" />
            </div>
        </footer>

    )
}

export default Footer