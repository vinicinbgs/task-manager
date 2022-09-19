import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif !important;
  }
  
  body {
    background: #807a70;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  
  button {
    cursor: pointer;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 1500px;
    flex-direction: column;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .expired {
    color: #EB4E3A;
  }

  .form-error {
    color: #EB4E3A;
    border-color: #EB4E3A;
  }
`;