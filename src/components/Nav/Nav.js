import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function Nav() {

    const {isAuth, logout} = useContext(AuthContext);
    console.log(isAuth)


    function handleLogout() {
        logout()
    }


return (
    <header>
        <nav className="navbar">
            <ul>
                <li><NavLink to="/startpagina" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Startpagina</NavLink></li>
                <li><NavLink to="/profielpagina" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Mijn Profielpagina</NavLink></li>
            </ul>
            <ul>
                { isAuth ?
                    <button className="logout-button" type="button" onClick={handleLogout}>Uitloggen</button>
                    :
                    <>
                        <li><NavLink to="/" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Inloggen</NavLink></li>
                        <li><NavLink to="/registreren" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Ik wil mij Registreren</NavLink></li>
                    </>
                }
            </ul>
        </nav>
    </header>
    );
}


export default Nav;
