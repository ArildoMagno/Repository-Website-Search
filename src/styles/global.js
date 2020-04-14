import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`

 *{
     margin: 0;
     paddin: 0;
     outline: 0;
     box-sizing: border-box;
     -webkit-font-smoothing: antialiased !important;
 }

  html,body, #root{
      min-height: 100%;
  }


  body{
      background: #00134d;
      font-size: 14px;
  }


  body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }


  button{
      cursor: pointer;
  }

`;