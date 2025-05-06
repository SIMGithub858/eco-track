import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Olá, {user.email}!</h2>
      <p>Acompanhe sua pegada de carbono e desafios sustentáveis.</p>
    </div>
  );
}

export default Dashboard;
