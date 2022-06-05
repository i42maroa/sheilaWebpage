import ButtonTitleBook from 'components/SVG/button'
import NextSvg from 'components/SVG/next'
import styles from './NextButton.module.css'

export default function NextButton ({ setPageBook, page }) {
    return (
            <>
                <div className={styles.container} onClick={()=>setPageBook(page)}>
                    <div className={styles.testButton}>
                        <h3 className={styles.text}>SUIVANT</h3>
                    </div>
                    <div class={styles.arrow}></div>
                </div>       
            </>
    )
  }