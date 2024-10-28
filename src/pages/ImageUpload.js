import React, { useState } from 'react';
import axios from 'axios';
import Button from "../components/Button/Button";
import {useNavigate} from "react-router-dom";
import logo from "../assets/newlogo-digizorger.png";
import LogoSmall from "../components/Picture/LogoSmall";

function ImageUpload() {
  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState('');
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  // constant for the new inhabitant_id that is being posted,
  // to generate the id to which the photo must be assigned to.
  const [inhabitant_id, setInhabitant_id] = useState(0);


  function handleImageChange(e) {
    // Sla het gekozen bestand op
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile);
    // Sla het gekozen bestand op in de state
    setFile(uploadedFile);
    // Sla de preview URL op zodat we deze kunnen laten zien in een <img>
    setPreviewUrl(URL.createObjectURL(uploadedFile));
  }

  async function sendImage(e) {
    // Voorkom een refresh op submit
    e.preventDefault();
    // maak een nieuw FormData object (ingebouwd type van JavaScript)
    const formData = new FormData();
    // Voeg daar het bestand uit de state aan toe onder de key "file"
    formData.append("file", file);

    try {
      // verstuur formData object en geef in de header aan dat het om een form-data type gaat.
      // Let op: we wijzigen nu ALTIJD de afbeelding voor account 1,
      // als je een ander account wil kiezen of dit dynamisch wil maken, pas je de url aan!
      // const result = await axios.post('http://localhost:8080/activities/1/photo', formData,
      // const result = await axios.post('http://localhost:8080/accounts/1/photo', formData,
      // const result = await axios.post(`http://localhost:8080/accounts/${account_id}/photo`, formData,
      const result = await axios.post('http://localhost:8080/upload', formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        })
      // setInhabitant_id(result.data);

      console.log(result.data);
      setConfirm(true);
    } catch (e) {
      console.error(e)
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

          <div className="form-container">
            <form className="form" onSubmit={sendImage}>
              <h1 className="form-title">Afbeelding uploaden</h1>

              <label htmlFor="inhabitant-image">
                Kies afbeelding:
                <input type="file" name="image-field" id="inhabitant-image" onChange={handleImageChange}/>
              </label>
              {/*Als er een preview url is, dan willen we deze in een afbeelding tonen*/}
              {previewUrl &&
                  <label>
                    Preview:
                    <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is"
                         className="image-preview"/>
                  </label>
              }

              <Button
                  type="submit"
              >Uploaden
                {confirm === true && <p>Afbeelding toegevoegd!</p>}
              </Button>

            </form>

            </div>
          </div>
        </main>
      </>
            );
            }

            export default ImageUpload;