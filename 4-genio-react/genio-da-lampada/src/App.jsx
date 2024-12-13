import { useState } from "react";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: "Sevillana", cursive;
}

`;

const Titulo = styled.h1`
  color:#FFFFFF;
  font-family: Sevillana;
  font-size: 62px;
  font-weight: 400;
  line-height: 84.13px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;

const Imagem = styled.img`
  width: 741px;
  height: 691px;
  top: 157px;
  left: 351px;
  gap: 0px;
  opacity: 0px;
  display: block;
  background-color: #007BFF;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 24px;
  border-radius: 30px;
  cursor: pointer;
`;


export default function App(){
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <GlobalStyle/>
        <Titulo>Liberte a magia da programação com a lâmpada de Aladim.</Titulo>
        <Imagem 
          src={
            lampada ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true" : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"} alt="Lâmpada"
            onClick={trocarLampada}
        />
    </main>
  );
}