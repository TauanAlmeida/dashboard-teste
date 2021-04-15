import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  font-family: 'Gilroy', sans-serif !important;
}

body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.title{
  font-weight: bold;
  font-size: 16px,
}
.marginTop{
  margin-top: 15px;
}
.fontWeightBold{
  font-weight: bold;
}
.fontWeightMedium{
  font-weight: 500;
}
section.cardWrapper{
  display: flex;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
}
.overflowHidden{
  overflow: hidden;
}
`;
