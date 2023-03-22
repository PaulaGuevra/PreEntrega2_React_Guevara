import "./footer.css"
import logo from "../../assets/logo.png"
import { SocialIcon } from "react-social-icons"
import { Link } from "react-router-dom"

function Footer(){
    return (
        <footer className="footer">
            <div className="categoria">
                <h6>Categorías</h6>
                <ul>
                    <li><Link to={"/category/Ojos"}>Ojos</Link></li>
                    <li><Link to={"/category/Labios"}>Labios</Link></li>
                    <li><Link to={"/category/Rostro"}>Rostro</Link></li>
                    <li><Link to={"/category/Brochas"}>Brochas</Link></li>
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