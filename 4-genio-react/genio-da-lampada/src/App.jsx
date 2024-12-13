import { useState } from "react";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sevillana", cursive;
  color: white;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
}
`;
const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;
const Titulo = styled.h1`
  font-size: 64px;
  font-weight: 400;
  line-height: 5.258rem;
`;

const Imagem = styled.img`
  width: 60vw;
  height: 60vh;
`;

const Button = styled.button`
  background-color: #007BFF;
  border: none;
  font-size: 20px;
  border-radius: 30px;
  width: 250px;
  height: 50px;
  padding: 9px 50px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #B74794;
  }
`

export default function App(){
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <Main>
      <GlobalStyle/>
        <Titulo>Liberte a magia da programação com a lâmpada de Aladim.</Titulo>
        <Imagem 
          src={
            lampada ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true" : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"} alt="Lâmpada"
            onClick={trocarLampada}
        /> 
        <Button onClick={trocarLampada} >Clique Aqui</Button> 
    </Main>
  );
}