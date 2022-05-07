
import BookButton from 'components/BookButton'
import SecondPageSVG from 'components/SVG/secondPage'
import styles from './SecondBookPage.module.css'

export default function SecondBookPage ({ onClick }) {
    return (
        <div  >
            <SecondPageSVG/>
            <button className={styles.elementPage} onClick={onClick}>Back</button> 

            <div className={styles.boxButtonContes}>
                <BookButton className={styles.buttonBook} onclick={() => console.log("SpiderMan")}>SpiderMan</BookButton>
                <BookButton className={styles.buttonBook} onclick={() => console.log("Frozen")}>Frozen</BookButton>
                <BookButton className={styles.buttonBook} onclick={() => console.log("Ratatouille")}>Ratatouille</BookButton>
                <BookButton className={styles.buttonBook} onclick={() => console.log("Caperucita")}>Caperucita</BookButton>
                <BookButton className={styles.buttonBook} onclick={() => console.log("Blancanieves")}>Blancanieves</BookButton>
            </div> 
        </div>
    )
}