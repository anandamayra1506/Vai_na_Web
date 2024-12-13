import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Exo 2", sans-serif;
}
`

export const Main = styled.main`
  background-image: url('5-calculadora-react\public\calculadora-bg.webp'); 
  background-size: cover; 
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const H1 = styled.h1`
  color: #e5028a;
  font-size: 60px;
  margin: 30px;
  padding: 20px;
  background-color: #ffffff96;

`
export const Img = styled.img`
  width: 5vw;
`
export const Input = styled.input`
  width: 40vw;
  border: 2px solid black;
  padding: 15px;
  margin: 10px;
`
export const Button = styled.button`
  background-color: orange;
  padding: 20px 30px;
  margin: 5px;
  cursor: pointer; 
  color: black;
  border: none;
  font-size: 16px;

  &:hover {
    background-color: yellow;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const H3 = styled.h3`
  color: black;
  font-size: 50px;
  margin: 5px;
  background-color: yellow;
  padding: 30px 60px;
  border-radius: 10px;
`