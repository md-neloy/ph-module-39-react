const Friend = ({ props }) => {
  return (
    <div
      style={{
        border: "2px solid white",
      }}
    >
      <p>User Id: {props.id}</p>
      <p>User Name: {props.name}</p>
    </div>
  );
};
export default Friend;
