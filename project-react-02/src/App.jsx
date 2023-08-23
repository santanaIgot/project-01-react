import React from "react";
import ListaAlunos from "./componentes/ListaAluno";
import logoReact from "./assets/react.svg";

// <>
export default function App() {

  const aluno = 'carlos'
  const curso = 'ADS'
  const alunos = ['joel', 'joao', 'smitherson']
  let altLogo = "logo marca"

  return(
    <> 
    <h1>TDSS FIAP - RWD</h1>
    <p>alunos: {aluno}</p>
    <p>Curso: {curso}</p>

    <ListaAlunos alunos = {alunos} uriLogoreact = {logoReact} altLogoReact = {altLogo}/>
    </>
  )
}
