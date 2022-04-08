import FirstPageSVG from "components/SVG/firstPage";
import styles from './FirstBookPage.module.css'

export default function FirstBookPage ({ onClick }) {
    return (
        <div>
             <FirstPageSVG />
             <button className={styles.elementPage} onClick={onClick}>Next</button> 
        </div>
    )
}