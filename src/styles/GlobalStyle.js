import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
    min-height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    -webkit-image-smoothing: antialiased !important;
  }

  body , input , button, input, select {
  font-size: 1em;
  font-family:Roboto, sans-serif;
  font-weight: 100;
  }

  a {
  text-decoration: none;
  }

  ul {
  list-style: none;

  }


  button {
  color: #fff;
  }
`;
