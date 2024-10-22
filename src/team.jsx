import { useState } from "react";

function Team() {
  const [team, setTeam] = useState(11);
  const teamstyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "10px",
    borderRadius: "12px",
  };
  const teambtnstyle = {
    marginLeft: "10px",
  };
  function handleAdd() {
    const newteam = team + 1;
    setTeam(newteam);
  }
  function handleReduce() {
    setTeam(team - 1);
  }
  return (
    <div style={teamstyle}>
      <h3>Players:{team}</h3>
      <button onClick={handleAdd}>Add Team</button>
      <button style={teambtnstyle} onClick={handleReduce}>
        Reduce Team
      </button>
    </div>
  );
}
export default Team;
