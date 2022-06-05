
import NextSvg from 'components/SVG/next'
import styles from './BackButton.module.css'

export default function BackButton ({ setPageBook, page }) {
    return (
            <>
                <div className={styles.container} onClick={()=>setPageBook(page)}>
                    {/* <NextSvg className={styles.rotate} width={15}/> */}
                    <div class={styles.arrow}></div>
                    <div className={styles.testButton}>
                        <h3 className={styles.text}>RETOURNEZ</h3>
                    </div>                 
                </div>
            
            </>
    )
  }