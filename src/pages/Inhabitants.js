import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import LogoBig from "../components/Picture/LogoBig";
import voegbewonertoe from "../assets/voegbewonertoe.png";
import uploadprofielfoto from "../assets/profiel.png";
import Button from "../components/Button/Button";
import logo from "../assets/newlogo-digizorger.png";
import LogoSmall from "../components/Picture/LogoSmall";

function Inhabitants() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [inhabitants, setInhabitants] = useState([]);
  const [selectDelete, setDelete] = useState(false);


  useEffect(() => {
    const controller = new AbortController();
    async function fetchInhabitants() {

      try {
        const response = await axios.get('http://localhost:8080/accounts', {
        // const response = await axios.get('http://localhost:8080/accounts/after/birthdate?date=1973-08-08');
        // const response = await axios.get('http://localhost:8080/accounts/{gebruiker1}');
        // Putting persons in state for using on page.
        headers: {
          "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
        },
        signal: controller.signal,
      });
        setInhabitants(response.data);
        // console.log(response.data);
      } catch(e) {
          console.error(e);
      }
    }

    void fetchInhabitants();
    return function cleanup() {
      controller.abort();
    }
  }, [selectDelete]);


  function deleteSelected(inhabitantId) {
    setDelete(!selectDelete);
    deleteInhabitant(inhabitantId)
  }


  async function deleteInhabitant(id) {
    try {
      // const response = await axios.delete(`http://digizorgerbackend.azurewebsites.net/accounts/${id}`, {
      const response = await axios.delete(`http://localhost:8080/accounts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      })

    } catch (e) {
      console.error(e);
    }
  }


  return (
      <>
        <main className="outer-content-container">
          <div className="inner-content-container">

            <LogoSmall
                img={logo}
                imgTitle="logo"
                onClick={() => navigate('/')}
            />

            <h1 className="form-title">Profielen</h1>

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
                // The key must be on the outer element and be unique
                return <tr key={inhabitant.id}>
                  {/*<td>{inhabitant.id}</td>*/}
                  {/*<td>{inhabitant.roomnumber}</td>*/}

                  {/*check if there is a file, and if so, show it.*/}
                  {/*<td>{inhabitant.file && <img src={inhabitant.file.url} alt={inhabitant.lastname}/>}</td>*/}

                  <td>{<img src={inhabitant.img} alt={inhabitant.lastname}/>}</td>
                  <td>{inhabitant.salutation}</td>
                  <td>{inhabitant.lastname}</td>
                  <td>{inhabitant.helpingtool}</td>


                  <Button
                      className="select-button"
                      type="submit"
                      onClick={() => deleteSelected(inhabitant.id)}
                      children="verwijder"
                  />

                </tr>
              })}
              </tbody>
            </table>
            <br/>
          </div>
        </main>
      </>
  );
}

export default Inhabitants;