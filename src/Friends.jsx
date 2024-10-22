import Friend from "./Friend";
import { useEffect, useState } from "react";
function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const respons = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await respons.json();
      setFriends(data);
    }
    fetchData();
  }, []);
  return (
    <div className="box">
      <h3>Friends:{friends.length}</h3>
      {friends.map((friend) => {})}
    </div>
  );
}

export default Friends;
/*
 1. declate state to hold data 
 */
