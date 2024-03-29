import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import "./FormPage.css";
import axios from "axios";
import validations from "../../controllers/validations";

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

  const handleSubmit = async (event) => {
    event.preventDefault();

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

    if (newDriver) {
      const validation = validations(newDriver);
      if (validation) {
        try {
          window.alert(`New Driver added: ${newDriver.name.forename}`);
          setFirstName("");
          setBirthdate("");
          setDescription("");
          setImageURL("");
          setNationality("");
          setSelectedTeams("");
          setLastName("");
          return await axios.post("http://localhost:3001/drivers", newDriver);
        } catch (error) {
          window.alert(error);
        }
      }
    }
  };

  const handleReset = () => {
    setSelectedTeams("");
  };

  return (
    <div className="div-form">
      <NavBar />
      <form className="create-form" onSubmit={handleSubmit}>
        <h2>Create New Driver</h2>
        <label className="create-label" htmlFor="firstName">
          Name:
        </label>
        <input
          type="text"
          id="firstName"
          value={forename}
          onChange={(e) => setFirstName(e.target.value)}
          className="create-input"
        />

        <label className="create-label" htmlFor="lastName">
          Lastname:
        </label>
        <input
          className="create-input"
          type="text"
          id="lastName"
          value={surname}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label className="create-label" htmlFor="nationality">
          Nation:
        </label>
        <input
          className="create-input"
          type="text"
          id="nationality"
          value={nation}
          onChange={(e) => setNationality(e.target.value)}
        />

        <label className="create-label" htmlFor="imageURL">
          Image:
        </label>
        <input
          className="create-input"
          type="text"
          id="imageURL"
          value={image}
          onChange={(e) => setImageURL(e.target.value)}
        />

        <label className="create-label" htmlFor="birthdate">
          Date of birthdate:
        </label>
        <input
          className="create-input"
          type="date"
          id="birthdate"
          value={dob}
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <label className="create-label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="create-input"
          id="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label className="create-label" htmlFor="teams">
          Teams:
        </label>
        <p>{teams}</p>
        <select className="create-select" id="teams" multiple>
          {allTeams.map((team) => (
            <option key={team.id} value={team.name} onClick={handleTeamChange}>
              {team.name}
            </option>
          ))}
        </select>
        <button className="create-button" type="button" onClick={handleReset}>
          Reset teams
        </button>
        <button className="create-button" type="submit">
          Create driver
        </button>
      </form>
    </div>
  );
};

export default FormPage;
