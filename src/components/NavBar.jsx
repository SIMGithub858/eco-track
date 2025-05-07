import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <img src="\Images\EcoTrack.png" alt="EcoTrack" width="100px"/>
      <nav>
      
        <Link to="/">Home</Link> &nbsp;
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </>
  );
}

export default Navbar;
