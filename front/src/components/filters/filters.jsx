import React, { useState, useEffect } from "react";
import axios from 'axios';
import './filters.css'

const Filters = ({ onTeamFilter, onSourceFilter }) => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSource, setSelectedSource] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:3001/teams');
        setTeams(response.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  const handleTeamChange = (event) => {
    const selectedTeam = event.target.value;
    setSelectedTeam(selectedTeam);
    onTeamFilter(selectedTeam);
  };

  const handleSourceChange = (event) => {
    const selectedSource = event.target.value;
    setSelectedSource(selectedSource);
    onSourceFilter(selectedSource);
  };

  return (
    <div>
      <label>Equipo:</label>
      <select value={selectedTeam} onChange={handleTeamChange}>
        <option value="">Todos los Equipos</option>
        {teams.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>

      <label>Fuente:</label>
      <select value={selectedSource} onChange={handleSourceChange}>
        <option value="">Todas las Fuentes</option>
        <option value="api">API</option>
        <option value="database">Base de Datos</option>
      </select>
    </div>
  );
};

export default Filters;
