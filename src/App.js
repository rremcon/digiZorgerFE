import React, {useContext} from 'react';
import {AuthContext} from "./context/AuthContext";
import './styles/App.css';
import Nav from "./components/Nav/Nav";
import {Navigate, Route, Routes} from "react-router-dom";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import Profielpagina from "./pages/Profielpagina";
import Picture from "./components/Picture/Picture";
import digizorgerlogo from './assets/digizorgerlogo.png';
import Startpagina from "./pages/Startpagina";
import Productpagina from "./pages/Productpagina";
import Producten from "./pages/Producten";
import Boeken from "./pages/Boeken";
import BestelBoek from "./pages/BestelBoek";
import Activiteiten from "./pages/Activiteiten";
import ReserveerActiviteit from "./pages/ReserveerActiviteit";


function App() {

  const {isAuth} = useContext(AuthContext);


  return (
      <>
        <header className="header">
          <Picture className="header-picture"
                   img={digizorgerlogo}
                   imgTitle="logo"
          />
        </header>


        <Nav/>
        <Routes>
          <Route path="/" element={<Inloggen/>} />
            <Route path="/registreren" element={<Registreren/>} />
            <Route path="/profielpagina" element={ isAuth ? <Profielpagina/> : <Navigate to="/"/>} />
            <Route path="/startpagina" element={ isAuth ? <Startpagina/> : <Navigate to="/"/>} />
            <Route path="/boeken" element={<Boeken/>} />
            <Route path="/boek/:id" element={<BestelBoek/>}/>
            <Route path="/activiteiten" element={<Activiteiten/>} />
            <Route path="/activiteit/:id" element={<ReserveerActiviteit/>} />


            <Route path="/producten" element={<Producten/>} />
            <Route path="/product/:id" element={<Productpagina/>}/>
        </Routes>

      </>
  );
}

export default App;

