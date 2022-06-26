
import Link from 'next/link'
import styles from './BackButton.module.css'

export default function BackButton ({ page }) {
    return (
            <>
                <Link href={`/conte/${page}`} >
                    <div className={styles.container} >                  
                        <div className={styles.testButton}>
                            <div className={styles.arrow}></div>
                        </div>                   
                    </div> 
                            {/* <h3 className={styles.text}>RETOURNEZ</h3> */}
                </Link>
                     
            </>
    )
  }