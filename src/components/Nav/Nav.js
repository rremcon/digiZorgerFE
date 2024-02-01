import React, {useContext} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import './Nav.css'


function Nav() {

    const {isAuth, logout} = useContext(AuthContext);
    console.log(isAuth)

    const navigate = useNavigate();

    function handleLogout() {
        logout()
    }


return (
    <header>
        <nav className="navbar">
            <ul>
                {/*<li><NavLink to="/startpagina" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Startpagina</NavLink></li>*/}
                {/*<li><NavLink to="/profielpagina" className={ ( { isActive } ) => isActive ? "link--active" : "link" }>Mijn Profielpagina</NavLink></li>*/}
                <button className="startpagina-button" type="button" onClick={() => navigate('/startpagina')}>Startpagina</button>
                <button className="manager-button" type="button" onClick={() => navigate('/personeel')}>Manager</button>
                <button className="account-button" type="button" onClick={() => navigate('/profielpagina')}>Account</button>

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
