import { createGlobalStyle } from "styled-components";
import theme from "./defaultTheme";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 12px;
  }

  body {
    margin: 0;
    color: ${theme.colors.primaryTextColor};
    background: ${theme.colors.background};
    font-family: "Open Sans", sans-serif;
  }

  main {
    display: block;
  }

  table {
    border: 2px solid forestgreen;
    width: auto;
    height: auto;
  }

  th {
    border-bottom: 1px solid black;
    padding: 5px;
  }

  td {
    text-align: center;
    padding: 5px;
  }

  .react-datepicker__input-container {
    margin: 0 0 15px 0;
  }

  .radio-status {
    margin: 0 0 15px 0;
  }

  .react-datepicker__input-container > input {
    width: 100%;
    border: 1px solid #cccccc;
    color: #333333;
    padding: 0.5rem;
    padding-left: 10px;
    min-height: 2rem;
    text-align: center;
    border-radius: 10px;
    transition: border-color 0.2s linear;
  }

  .radio-status > label {
    margin: 0 10px;
  }

  .radio-status > label > input {
    margin-right: 2px;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    margin: 0; /* 2 */
  }
`;
