import { useState } from "react";
const Players = () => {
  // create a state for platers handle
  const [player, setplayer] = useState(11);

  // create handleplayer function
  const handleplayer = (props) => {
    props ? setplayer(player + 1) : setplayer(player - 1);
  };

  // crate a css variable
  const borderstyle = {
    border: "3px dashed aqua",
    padding: "10px",
    margin: "15px",
  };

  return (
    <>
      <div style={borderstyle}>
        <h3>Total Players: {player}</h3>
        <button
          onClick={() => {
            handleplayer(true);
          }}
        >
          Add Player
        </button>
        <button
          onClick={() => {
            handleplayer(false);
          }}
          style={{ marginLeft: "10px" }}
        >
          Remove Player
        </button>
      </div>
    </>
  );
};

export default Players;
