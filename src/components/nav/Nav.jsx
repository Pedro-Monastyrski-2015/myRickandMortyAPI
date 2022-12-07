import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import styles from  "./Nav.module.css";


export default function Nav ({onSearch}){
    return (
        <div className={styles.navBar}>
            <div className={styles.contItems}>
                <div className={styles.navItems}>
            <Link to='/home'>Home</Link>
            </div>
            <div className={styles.navItems}>
            <Link to='/about'>About</Link>
            </div>
            </div>
            

            <div className={styles.navItems}>
            <SearchBar onSearch={onSearch}/>
            </div>
        </div>
    )
}

