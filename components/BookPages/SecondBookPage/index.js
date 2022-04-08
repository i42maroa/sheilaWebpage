
import SecondPageSVG from 'components/SVG/secondPage'
import styles from './SecondBookPage.module.css'

export default function SecondBookPage ({ onClick }) {
    return (
        <div  >
            <SecondPageSVG/>
            <button className={styles.elementPage} onClick={onClick}>Back</button> 

            <div className={styles.boxButtonContes}>
              <button className={styles.buttonBook}>SpiderMan</button> 
              <button className={styles.buttonBook}>Frozen</button> 
              <button className={styles.buttonBook}>Ratatouille</button> 
              <button className={styles.buttonBook}>Caperucita</button> 
              <button className={styles.buttonBook}>Blancanieves</button>
            </div> 
        </div>
    )
}