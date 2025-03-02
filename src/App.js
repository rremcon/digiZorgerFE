import React, {useContext} from 'react';
import {AuthContext} from "./context/AuthContext";
import './styles/App.css';
import './components/Nav/Nav.css';
import Nav from "./components/Nav/Nav";
import LogoBig from "./components/Picture/LogoBig";
import logo from './assets/newlogo-digizorger.png';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registrate from "./pages/Registrate";
import Profile from "./pages/Profile";
import Startpage from "./pages/Startpage";
import Activities from "./pages/Activities";
import ReservateActivity from "./pages/ReservateActivity";
import ImageUpload from './pages/ImageUpload';
import AddInhabitant from './pages/AddInhabitant';
import Inhabitants from './pages/Inhabitants';
import AdminPage from "./pages/Administrator/AdminPage";
import AddActivity from "./pages/Administrator/AddActivity";
import AdminOrders from "./pages/Administrator/AdminOrders";
import ReservationsSwimming from "./pages/Administrator/ReservationsSwimming";
import ReservationsGolfing from "./pages/Administrator/ReservationsGolfing";
import ReservationsBilliards from "./pages/Administrator/ReservationsBilliards";
import ReservationsBingo from "./pages/Administrator/ReservationsBingo";
import ReservationsCycling from "./pages/Administrator/ReservationsCycling";
import ReservationsYoga from "./pages/Administrator/ReservationsYoga";
import ReservationsShuffleBoard from "./pages/Administrator/ReservationsShuffleBoard";
import ReservationsDancing from "./pages/Administrator/ReservationsDancing";
import ReservationsCards from "./pages/Administrator/ReservationsCards";
import ReservationsJeuDeBoule from "./pages/Administrator/ReservationsJeuDeBoule";
import ReservationsCrochet from "./pages/Administrator/ReservationsCrochet";
import ReservationsWalking from "./pages/Administrator/ReservationsWalking";
import ReservationsDigiTraining from "./pages/Administrator/ReservationsDigiTraining";
import ReservationsWelcome from "./pages/Administrator/ReservationsWelcome";
import ReservationsWorkshop from "./pages/Administrator/ReservationsWorkshop";
import ReservationsWeekendTrip from "./pages/Administrator/ReservationsWeekendTrip";
import ReservationsWaiting from "./pages/Administrator/ReservationsWaiting";
import ActivitiesRegularBasis from "./pages/ActivitiesRegularBasis";
import ActivitiesProjectBasis from "./pages/ActivitiesProjectBasis";
import ActivitiesRegularMonday from "./pages/ActivitiesRegularMonday";
import ActivitiesRegularTuesday from "./pages/ActivitiesRegularTuesday";
import ActivitiesRegularWednesday from "./pages/ActivitiesRegularWednesday";
import ActivitiesRegularThursday from "./pages/ActivitiesRegularThursday";
import ActivitiesRegularFriday from "./pages/ActivitiesRegularFriday";
import ActivitiesProjectMonday from "./pages/ActivitiesProjectMonday";
import ActivitiesProjectTuesday from "./pages/ActivitiesProjectTuesday";
import ActivitiesProjectWednesday from "./pages/ActivitiesProjectWednesday";
import ActivitiesProjectThursday from "./pages/ActivitiesProjectThursday";
import ActivitiesProjectFriday from "./pages/ActivitiesProjectFriday";
import AdminActivities from "./pages/Administrator/AdminActivities";
import MobilityTicket from "./pages/MobilityTicket";


function App() {

  const {isAuth} = useContext(AuthContext);

  return (

      <>
        {/*<header id="header" className="outer-content-container">*/}
        {/*  <div className="inner-content-container-header">*/}

        {/*    <LogoBig*/}
        {/*        img={logo}*/}
        {/*        imgTitle="logo"*/}
        {/*    />*/}

        {/*    <Nav/>*/}

        {/*  </div>*/}

        {/*</header>*/}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/inloggen" element={<Login/>}/>
          <Route path="/registreren" element={<Registrate/>}/>
          <Route path="/profielpagina" element={isAuth ? <Profile/> : <Navigate to="/"/>}/>
          <Route path="/startpagina" element={isAuth ? <Startpage/> : <Navigate to="/"/>}/>
          <Route path="/admin/activiteiten" element={<AdminActivities/>}/>
          <Route path="/activiteiten" element={<Activities/>}/>
          <Route path="/activiteiten/standaardbasis" element={<ActivitiesRegularBasis/>}/>
          <Route path="/activiteiten/projectbasis" element={<ActivitiesProjectBasis/>}/>

          <Route path="/activiteiten/standaardbasis/maandag" element={<ActivitiesRegularMonday/>}/>
          <Route path="/activiteiten/standaardbasis/dinsdag" element={<ActivitiesRegularTuesday/>}/>
          <Route path="/activiteiten/standaardbasis/woensdag" element={<ActivitiesRegularWednesday/>}/>
          <Route path="/activiteiten/standaardbasis/donderdag" element={<ActivitiesRegularThursday/>}/>
          <Route path="/activiteiten/standaardbasis/vrijdag" element={<ActivitiesRegularFriday/>}/>

          <Route path="/activiteiten/projectbasis/maandag" element={<ActivitiesProjectMonday/>}/>
          <Route path="/activiteiten/projectbasis/dinsdag" element={<ActivitiesProjectTuesday/>}/>
          <Route path="/activiteiten/projectbasis/woensdag" element={<ActivitiesProjectWednesday/>}/>
          <Route path="/activiteiten/projectbasis/donderdag" element={<ActivitiesProjectThursday/>}/>
          <Route path="/activiteiten/projectbasis/vrijdag" element={<ActivitiesProjectFriday/>}/>

          <Route path="/reserveringen/zwemmen" element={<ReservationsSwimming/>}/>
          <Route path="/reserveringen/golfen" element={<ReservationsGolfing/>}/>
          <Route path="/reserveringen/biljarten" element={<ReservationsBilliards/>}/>
          <Route path="/reserveringen/bingo" element={<ReservationsBingo/>}/>
          <Route path="/reserveringen/fietsen" element={<ReservationsCycling/>}/>
          <Route path="/reserveringen/yoga" element={<ReservationsYoga/>}/>
          <Route path="/reserveringen/sjoelen" element={<ReservationsShuffleBoard/>}/>
          <Route path="/reserveringen/dansen" element={<ReservationsDancing/>}/>
          <Route path="/reserveringen/kaarten" element={<ReservationsCards/>}/>
          <Route path="/reserveringen/jeudeboule" element={<ReservationsJeuDeBoule/>}/>
          <Route path="/reserveringen/haken" element={<ReservationsCrochet/>}/>
          <Route path="/reserveringen/wandelen" element={<ReservationsWalking/>}/>
          <Route path="/reserveringen/digitraining" element={<ReservationsDigiTraining/>}/>
          <Route path="/reserveringen/welkom" element={<ReservationsWelcome/>}/>
          <Route path="/reserveringen/workshop" element={<ReservationsWorkshop/>}/>
          <Route path="/reserveringen/weekendweg" element={<ReservationsWeekendTrip/>}/>
          <Route path="/reserveringen/wachtend" element={<ReservationsWaiting/>}/>


          <Route path="/activiteit/:id" element={<ReservateActivity/>}/>

          <Route path="/bewoners" element={<Inhabitants/>}/>

          <Route path="/personeel" element={isAuth ? <AdminPage/> : <Navigate to="/"/>}/>
          <Route path="/personeel/toevoegen-activiteit" element={<AddActivity/>}/>
          <Route path="/personeel/nieuwe-bewoner" element={<AddInhabitant/>}/>
          <Route path="/personeel/mobiliteit-aanvragen" element={<MobilityTicket/>}/>
          <Route path="/personeel/uploaden-profielfoto" element={<ImageUpload/>}/>
          <Route path="/personeel/ophalen-reserveringen" element={<AdminOrders/>}/>

        </Routes>

        {/*<footer id="footer" className="outer-content-container">*/}
        {/*  <div className="inner-content-container">*/}
        {/*    digizorger.nl &copy; 2025*/}
        {/*  </div>*/}
        {/*</footer>*/}

      </>
  );
}

export default App;

