import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import "./FormPage.css";
import axios from "axios";

const FormPage = () => {
  const [forename, setFirstName] = useState("");
  const [surname, setLastName] = useState("");
  const [nation, setNationality] = useState("");
  const [image, setImageURL] = useState("");
  const [dob, setBirthdate] = useState("");
  const [description, setDescription] = useState("");
  const [teams, setSelectedTeams] = useState("");
  const [allTeams, setTeams] = useState([]);

  const getAllTeams = async () => {
    try {
      const { data } = await axios("http://localhost:3001/teams");
      setTeams(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTeams();
  }, []);

  const handleTeamChange = (event) => {
    const teamName = event.target.value;
    if (!teams.includes(teamName)) {
      if (teams.length == 0) {
        setSelectedTeams(teamName);
      } else {
        const newTeamsSelect = `${teams}, ${teamName}`;
        setSelectedTeams(newTeamsSelect);
      }
    } else {
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar cualquier validación necesaria antes de enviar los datos

    const newDriver = {
      name: {
        forename: forename,
        surname: surname,
      },
      nation: nation,
      image: image,
      dob: dob,
      description: description,
      teams: teams,
    };
    // Envía el objeto del nuevo driver a tu lógica de aplicación (por ejemplo, mediante una acción de Redux o una solicitud AJAX)

    // Aquí puedes hacer algo con el nuevo driver (por ejemplo, mostrarlo en la consola)
    console.log(newDriver);
  };

  const handleReset = () => {
    setSelectedTeams("");
  };

  return (
    <div className="div-form">
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          id="firstName"
          value={forename}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Lastname:</label>
        <input
          type="text"
          id="lastName"
          value={surname}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="nationality">Nation:</label>
        <input
          type="text"
          id="nationality"
          value={nation}
          onChange={(e) => setNationality(e.target.value)}
          required
        />

        <label htmlFor="imageURL">Image:</label>
        <input
          type="text"
          id="imageURL"
          value={image}
          onChange={(e) => setImageURL(e.target.value)}
          required
        />

        <label htmlFor="birthdate">Date of birthdate:</label>
        <input
          type="date"
          id="birthdate"
          value={dob}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label htmlFor="teams">Teams:</label>
        <p>{teams}</p>
        <select id="teams" multiple>
          {allTeams.map((team) => (
            <option key={team.id} value={team.name} onClick={handleTeamChange}>
              {team.name}
            </option>
          ))}
        </select>
        <button type="button"onClick={handleReset}>Reset teams</button>
        <button type="submit">Create driver</button>
      </form>
    </div>
  );
};

export default FormPage;
