import ButtonTitleBook from 'components/SVG/button'
import NextSvg from 'components/SVG/next'
import Link from 'next/link'
import styles from './NextButton.module.css'

export default function NextButton ({ page }) {
    return (
            <>
                <div className={styles.container} >
                    <div className={styles.testButton}>
                        <Link href={`/conte/${page}`} >
                            <h3 className={styles.text}>SUIVANT</h3>
                        </Link>
                    </div>     
                    <div className={styles.arrow}></div>
                </div>       
            </>
    )
  }