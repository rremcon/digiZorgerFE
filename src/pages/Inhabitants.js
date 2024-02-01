import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Inhabitants.css';
import {Link} from "react-router-dom";
import Picture from "../components/Picture/Picture";
import voegbewonertoe from "../assets/voegbewonertoe.png";
import uploadprofielfoto from "../assets/uploadprofielfoto.png";
import Button from "../components/Button/Button";

function Inhabitants() {
  const [inhabitants, setInhabitants] = useState([]);

  useEffect(() => {
    async function fetchInhabitants() {
      try {
        const response = await axios.get('http://localhost:8080/accounts');
        // const response = await axios.get('http://localhost:8080/accounts/after/birthdate?date=1973-08-08');
        // const response = await axios.get('http://localhost:8080/accounts/{gebruiker1}');
        // Plaats alle personen in de state zodat we het op de pagina kunnen gebruiken
        setInhabitants(response.data);
        console.log(response.data);
      } catch(e) {
          console.error(e);
      }
    }

    fetchInhabitants();
  }, []);

  return (
    <div className="page-container">
      <h1 className="form-title">Accounts</h1>

      <table>
        <thead>
        <tr>
          {/*<th>Id</th>*/}
          {/*<th>Kamernummer</th>*/}
          <th>Foto</th>
          <th>Aanhef</th>
          <th>Naam</th>
          <th>Hulpmiddel</th>
          {/*<th>Emailadres</th>*/}
        </tr>
        </thead>
        <tbody>
        {inhabitants.map((inhabitant) => {
          // De key moet op het buitenste element staan en uniek zijn
          return <tr key={inhabitant.id}>
            {/*<td>{inhabitant.id}</td>*/}
            {/*<td>{inhabitant.roomnumber}</td>*/}

            {/*Even checken of er uberhaupt een file is, en zo ja, dan laten we hem zien!*/}
            {/*<td>{inhabitant.file && <img src={inhabitant.file.url} alt={inhabitant.lastname}/>}</td>*/}

            <td>{<img src={inhabitant.img} alt={inhabitant.lastname}/>}</td>
            <td>{inhabitant.salutation}</td>
            <td>{inhabitant.lastname}</td>
            <td>{inhabitant.helpingtool}</td>


            <Link to={`/activiteiten/`}>
              <Button
                  className="select-button"
                  type="button"
                  children="Mijn activiteiten"

              />
            </Link>

          </tr>
        })}

        </tbody>
      </table>

    </div>
  );
}

export default Inhabitants;