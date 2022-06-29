import Link from 'next/link'
import styles from './NextButton.module.css'

export default function NextButton ({ page }) {
  return (
            <>
                <Link href={`/conte/${page}`} >
                    <div className={styles.container} >
                        <div className={styles.testButton}>
                            {/* <h3 className={styles.text}>SUIVANT</h3> */}
                            <div className={styles.arrow}></div>
                        </div>
                    </div>
                </Link>
            </>
  )
}
