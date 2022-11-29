import React from "react";
import { validation } from "./validation";
import styles from './Form.module.css'



export default function Form (){
    const [userData,setUserData]= React.useState({
        username:'',
        password:''
    })

    const [errors, setErrors]=React.useState({
        username:'',
        password:''
    })

    function handleInputChange (e){
        setUserData({
            ...userData,
            [e.target.name]:e.target.value});

        setErrors(
            validation({
                ...userData,
                [e.target.name]:e.target.value}))
    }

    return (<div className={styles.formContainer}>
        <form >
            <label htmlFor="username" className={styles.formLabel}>Username:</label>
            <input
            className={styles.formInput}
            onChange={handleInputChange}
            value={userData.username}
            id="username"
            name="username"
            placeholder="ingrese el usuario..."
            type="text" />
            <p>{errors.username}</p>

            <label
             className={styles.formLabel}
             htmlFor="password">Password:</label>
            <input
            className={styles.formInput} 
            onChange={handleInputChange}
            value={userData.password}
            id="password"
            name="password"
            placeholder="ingrese la contraseña..."
            type="password" />
            <p>{errors.password}</p>

            <input type="submit"/>
        </form>
    </div>)
}