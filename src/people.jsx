const Users = ({ image, id, name, age }) => {
  return (
    <div className="person" key={id}>
      <img src={image} alt="" />
      <div>
        <p>{name}</p>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Users;
