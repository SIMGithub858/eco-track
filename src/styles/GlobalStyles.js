import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #1F3934;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  h1, h2, h3 {
    font-weight: bold;
    color: #2e8b57;
  }

  button {
    background-color: #2e8b57;
    color: white;
    padding: 12px 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    font-size: 16px;
  }

  button:hover {
    background-color: #216e45;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  a {
    text-decoration: none;
    color: #2e8b57;
    font-weight: 500;
    transition: 0.3s;
  }

  a:hover {
    color: #216e45;
  }
`;

export default GlobalStyle;
