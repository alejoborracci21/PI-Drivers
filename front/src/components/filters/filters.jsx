import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { FilterTeam, FilterPlatform, orderByDate, orderByName } from "../../redux/actions";
import './filters.css'
import { FILTER_TEAM } from "../../redux/actions/types";

const Filters = () => {
  const dispatch = useDispatch()
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
    dispatch(FilterTeam(selectedTeam));
  };

  const handleSourceChange = (event) => {
    const selectedSource = event.target.value;
    setSelectedSource(selectedSource);
    dispatch(FilterPlatform(selectedSource));
  };

  return (
    <div>
      <label>Equipo:</label>
      <select value={selectedTeam} onChange={handleTeamChange}>
        <option value="all">Todos los Equipos</option>
        {teams.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>

      <label>Fuente:</label>
      <select value={selectedSource} onChange={handleSourceChange}>
        <option value="all">Todas las Fuentes</option>
        <option value="api">API</option>
        <option value="database">Base de Datos</option>
      </select>
    </div>
  );
};

export default Filters;
