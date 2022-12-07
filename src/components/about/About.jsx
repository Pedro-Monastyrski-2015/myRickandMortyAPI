import React from "react";
import styles from './About.module.css'

export default function About (){
    return (
        <div className={styles.container}>
            <h1>Bienvenidos a la Rick and Morty App</h1><br/>
            <h3>Creado por: Pedro Monastyrski</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>
                Bienvenidos a la aplicacion de Rick and Morty.<br/>
                Esta pequeña API fue creada con el proposito de 
                solidificar y poner en práctica mis conocimientos de React <br/>
                De a poco la voy mejorando pero espero que disfrutes su paso por aqui.
                <br/>Saludos con mucho cariño.<br/>
                <br/>
                El creador.
            </p>
            
        </div>)
}