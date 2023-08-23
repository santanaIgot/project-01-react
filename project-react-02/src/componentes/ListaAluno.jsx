import React from "react";

export default function ListaAlunos(props) {
    
    return(
        <>
        <ul>
            <li>{props.alunos[0]}</li>
            <li>{props.alunos[1]}</li>
            <li>{props.alunos[2]}</li>
        </ul>
        <img src= {props.uriLogoReact} alt={props.altLogoReact} />
       </>
    )
}