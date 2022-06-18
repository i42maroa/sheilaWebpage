
import Link from 'next/link'
import styles from './BackButton.module.css'

export default function BackButton ({ page }) {
    return (
            <>
                <div className={styles.container} >
                    <div className={styles.arrow}></div>
                    <div className={styles.testButton}>
                        <Link href={`/conte/${page}`} >
                            <h3 className={styles.text}>RETOURNEZ</h3>
                        </Link>   
                    </div>                   
                </div>      
            </>
    )
  }