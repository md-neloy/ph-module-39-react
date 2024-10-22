import { useEffect } from "react";
import { useState } from "react";
import Friend from "./Friend";
const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getFetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      setUsers(data);
    };
    getFetchData();
  }, []);
  const style = {
    fontSize: "20px",
    fontWeight: "700",
    color: "white",
  };
  return (
    <>
      <div style={style}>User:{users.length};</div>
      {users.slice(0, 5).map((user) => {
        return <Friend props={user}></Friend>;
      })}
    </>
  );
};
export default User;
