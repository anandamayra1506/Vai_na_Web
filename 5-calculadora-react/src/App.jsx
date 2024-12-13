import { useState } from "react";
import * as S from "./Style";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState(null);
  const [segundoValor, setSegundoValor] = useState(null);
  const [resultado, setResultado] = useState(null);

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const limpar = () => {
    setPrimeiroValor(null);
    setSegundoValor(null);
    setResultado(null);
  };

  return (
    <>
      {}
      <S.GlobalStyle />
      <S.Main>
        <S.Img src="./public/calculadora.png" alt="Imagem de uma calculadora simples" />
        <S.H1>Calculadora</S.H1>
        <S.Input
          type="number"
          placeholder="Digite um número" value={primeiroValor || ""}
          onChange={capturandoPrimeiroValor}
        />
        <S.Input
          type="number"
          placeholder="Digite um número" value={segundoValor || ""}
          onChange={capturandoSegundoValor}
        />
        <div>
        <S.Button onClick={soma}>+</S.Button>
        <S.Button onClick={subtracao}>-</S.Button>
        <S.Button onClick={multiplicacao}>*</S.Button>
        <S.Button onClick={divisao}>/</S.Button>
        <S.Button onClick={limpar}>Limpar</S.Button>
        </div>
        <S.H3>{resultado}</S.H3>
      </S.Main>
    </>
  );
}
