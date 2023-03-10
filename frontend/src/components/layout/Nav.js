import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";

const Nav =(props) => {
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Nosotros">Nosotros</Link></li>
                    <li><Link to="/Novedades">Novedades</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                    <li><Link to="/Galeria">Galeria</Link></li>
                    <li><Link to="/PlantasInterior">Plantas de Interior</Link></li>
                    <li><Link to="/PlantasExterior">Plantas de Exterior</Link></li>
                </ul>
            </div>


        </nav>

    )

}


export default Nav;