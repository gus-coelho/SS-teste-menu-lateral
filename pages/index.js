import React from "react";
import Navbarside from "../components/Navbarside";

function Index() {
  return (
    <div className="container">
      <h1>SuperSquash.com.br</h1>
      <p>Teste menu lateral</p>
      <p>
        Fabinho, veja a divisão de assuntos que fiz, segundo tua última
        listagem, eu mudei o título de alguns e reescrevi alguns dos sub-itens,
        me diga o que acha. Se tu clicar no menu abaixo, ele vai mostrar os
        sub-itens.
      </p>
      <Navbarside />
    </div>
  );
}

export default Index;
