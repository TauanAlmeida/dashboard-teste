import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  font-family: 'Gilroy', sans-serif !important;
}
/* 
::-webkit-scrollbar {
    width: 12px;
    height: 10px;
}
 

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3); 
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
 

::-webkit-scrollbar-thumb {
   -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgb(103 58 183 / 50%);
}
::-webkit-scrollbar-thumb:window-inactive {
	background: rgb(103 58 183 / 50%);;
} */

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
  margin-bottom: 20px;
}

.mb-3{
  margin-bottom: 10px;
}
.overflowHidden{
  overflow: hidden;
}
`;
