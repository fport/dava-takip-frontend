import { Link } from "react-router-dom";

const Navbar = () => {
  const deleteItems = () => {
    localStorage.clear();
  };

  return (
    <div>
      <h1>Dava Takip</h1>
      <Link to="/login" style={{ color: "#1FB79B" }}>
        <button onClick={deleteItems}>Login</button>
      </Link>
    </div>
  );
};

export default Navbar;
