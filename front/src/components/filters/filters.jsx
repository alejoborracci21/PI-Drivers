import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { FilterNumber, FilterTeam, FilterPlatform, orderByDate, orderByName } from "../../redux/actions";
import './filters.css'

const Filters = () => {
  const dispatch = useDispatch()
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [orderAlfabetic, setOrderAlfabetic] = useState("");
  const [orderDate, setOrderDate] = useState("");

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

  const handleAlfabetic = (event) => {
    const selectedOrder = event.target.value;
    setOrderAlfabetic(selectedOrder)
    dispatch(orderByName(selectedOrder))
  }

  const handleDate = (event) => {
    const selectedOrder = event.target.value;
    setOrderDate(selectedOrder);
    dispatch(orderByDate(selectedOrder))
  }

  const handleNumber = (event) => {
    const selected = event.target.value;
    dispatch(FilterNumber(selected))
  }

  return (
    <div className="filters-container">
      <div className="filter-item">
        <label>Team:</label>
        <select value={selectedTeam} onChange={handleTeamChange}>
          <option value="all">All teams</option>
          {teams.map((equipo, index) => (
            <option key={index} value={equipo.name}>
              {equipo.name}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Source:</label>
        <select value={selectedSource} onChange={handleSourceChange}>
          <option value="all">All source</option>
          <option value="api">API</option>
          <option value="db">Database</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Order by age:</label>
        <select value={orderDate} onChange={handleDate}>
          <option value="des">Highest to lowest</option>
          <option value="asc">Lowest to highest</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Order by name:</label>
        <select value={orderAlfabetic} onChange={handleAlfabetic}>
          <option value="asc">Upward</option>
          <option value="des">Falling</option>
        </select>
      </div>

    </div>
  );
};

export default Filters;
