import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import styles from './Detail.module.css'

export default function Detail(){
    const { detailId } = useParams({})
    const navigate= useNavigate()
    const [character, setCharacter]= useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

     const handleClick= ()=>{
        navigate('/home')
     };

    return <div className={styles.detailCard}>
        <button onClick={handleClick}>Go Home</button>
        {character?(
                <div>
                    <div>
                        <h1>{character.name}</h1>
                        <h3>{character.status}</h3>
                        <h3>{character.species}</h3>
                        <h3>{character.gender}</h3>
                        <h3>{character.origin?.name}</h3>
                    </div>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                </div>
            ):("")
        }
    </div>
}