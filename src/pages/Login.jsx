import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ email });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Digite seu e-mail" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
