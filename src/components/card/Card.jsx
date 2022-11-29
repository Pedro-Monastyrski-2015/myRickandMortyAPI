import styles from './Card.module.css'
import { Link } from "react-router-dom"


export default function Card(props) {
   return (
      <div className={styles.fatherCard}>
         <div>
         <button className={styles.cardButton} onClick={props.onClose}>X</button>
         </div>
          

         <div className={styles.card}>
               <div className={styles.cardInfo}>
                  <Link to={`/detail/${props.id}`}>
                     <h2>{props.name}</h2>
                  </Link>
                  <h2>{props.species}</h2>
                  <h2>{props.gender}</h2>
               </div>
               <div className={styles.cardImg}>
                  <img  src={props.image} alt={props.name} />
               </div>
         </div>

      </div>
      
   );
}








/*CARD ORIGINAL*/

// export default function Card(props) {
//    return (
//       <div className={styles.card}>
//          <button onClick={props.onClose}>X</button>
//          <h2>{props.name}</h2>
//          <h2>{props.species}</h2>
//          <h2>{props.gender}</h2>
//          <img  src={props.image} alt={props.name} />
//       </div>
//    );
// }
