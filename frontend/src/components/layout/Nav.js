import React from 'react';
import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";

const Nav =(props) => {
    return(
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" :
                        undefined }>Home</NavLink></li>
                    <li><NavLink to="/Nosotros"className={({ isActive }) => isActive ? "activo" :
                        undefined }>Nosotros</NavLink></li>
                    <li><NavLink to="/Novedades"className={({ isActive }) => isActive ? "activo" :
                        undefined }>Novedades</NavLink></li>
                    <li><NavLink to="/Contacto"className={({ isActive }) => isActive ? "activo" :
                        undefined }>Contacto</NavLink></li>
                    <li><NavLink to="/Galeria"className={({ isActive }) => isActive ? "activo" :
                        undefined }>Galeria</NavLink></li>
                    <li><NavLink to="/PlantasInterior"className={({ isActive }) => isActive ? "activo" :
                        undefined }>Plantas de Interior</NavLink></li>
                    <li><NavLink to="/PlantasExterior"className={({ isActive }) => isActive ? "activo" :
                        undefined }>Plantas de Exterior</NavLink></li>
                </ul>
            </div>


        </nav>

    )

}


export default Nav;