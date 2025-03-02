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
    // Save the selected file
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile);
    // Save the selected file in the state
    setFile(uploadedFile);
    // Save the preview URL so we can show it in an <img>
    setPreviewUrl(URL.createObjectURL(uploadedFile));
  }

  async function sendImage(e) {
    // Prevent a refresh on submit
    e.preventDefault();
    // create a new FormData object (built-in type of JavaScript)
    const formData = new FormData();
    // Add the file from the state there under the key "file"
    formData.append("file", file);

    try {
      // send formData object and indicate in the header that it is a form-data type.
      // Note: we ALWAYS change the image for account 1 now,
      // if you want to choose another account or make it dynamic, adjust the url!
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
              {/*If there is a preview url, we want to show it in an image*/}
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