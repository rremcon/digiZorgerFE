import React, { useState } from 'react';
import './AddInhabitant.css';
import axios from 'axios';
import Button from "../components/Button/Button";

function AddInhabitant() {

    const [inhabitantSalutation, setInhabitantSalutation] = useState('Dhr.');
    const [inhabitantName, setInhabitantName] = useState('');
    const [inhabitantRoomnumber, setInhabitantRoomnumber] = useState('');
    const [inhabitantHelpingTool, setInhabitantHelpingTool] = useState('Niet van toepassing');
    const [confirm, setConfirm] = useState(false);

  async function addInhabitant(e) {
    // voorkom refresh
    e.preventDefault();
    console.log(inhabitantName, inhabitantSalutation, inhabitantHelpingTool);

    try {
        // Verstuur de data in een object en zorg dat de keys overeenkomen met die in de backend
        const response = await axios.post('http://localhost:8080/persons', {
            //     id
            salutation: inhabitantSalutation,
            name: inhabitantName,
            roomnumber: inhabitantRoomnumber,
            helpingtool: inhabitantHelpingTool,
        });

        console.log(response.data);
        setConfirm(true);
    } catch(e) {
        console.error(e);
    }
  }

  return (
      <>
        <main>
            <div className="form-container">
                <form onSubmit={addInhabitant}>
                    <h1 className="form-title">Een nieuwe bewoner toevoegen</h1>

                    <label htmlFor="inhabitant-salutation">
                        Aanhef:
                        <select
                            name="inhabitant-salutation-field"
                            id="inhabitant-salutation"
                            value={inhabitantSalutation}
                            onChange={(e) => setInhabitantSalutation(e.target.value)}
                        >
                            <option value="Dhr.">
                                Dhr.
                            </option>
                            <option value="Mevr.">
                                Mevr.
                            </option>
                        </select>
                    </label>

        <label htmlFor="inhabitant-name">
          Achternaam:
          <input
            type="text"
            name="inhabitant-name-field"
            id="inhabitant-name"
            value={inhabitantName}
            onChange={(e) => setInhabitantName(e.target.value)}
          />
        </label>

                    <label htmlFor="inhabitant-roomnumber">
                        Kamernummer:
                        <input
                            type="text"
                            name="inhabitant-roomnumber-field"
                            id="inhabitant-roomnumber"
                            value={inhabitantRoomnumber}
                            onChange={(e) => setInhabitantRoomnumber(e.target.value)}
                        />
                    </label>

        <label htmlFor="inhabitant-helpingtool">
          Hulpmiddel:
          <select
            id="inhabitant-helpingtool"
            name="inhabitant-helpingtool-field"
            value={inhabitantHelpingTool}
            onChange={(e) => setInhabitantHelpingTool(e.target.value)}
          >
            <option value="niet van toepassing">
              Niet van toepassing
            </option>
            <option value="rolstoel">
              Rolstoel
            </option>
            <option value="rolator">
              Rolator
            </option>
            <option value="wandelstok">
              Wandelstok
            </option>
            <option value="scootmobiel">
              Scootmobiel
            </option>
          </select>
        </label>

                    <Button
                        type="submit"
                        onClick={addInhabitant}
                    >Toevoegen
                        {confirm === true && <p>Bewoner toegevoegd!</p>}
                    </Button>

      </form>


            </div>
        </main>
      </>
  );
}

export default AddInhabitant;