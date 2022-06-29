import ButtonTitleBook from 'components/SVG/button'
import Link from 'next/link'
import styles from './BookButton.module.css'

export default function BookButton ({ children, page }) {
  return (
            <>
                <div className={styles.container} >
                    <div className={styles.testButton}>
                        <Link href={`/conte/${page}`} >
                            <h3 className={styles.text}>{children}</h3>
                        </Link>
                    </div>

                    <ButtonTitleBook className={styles.svg} background={'#775602'} width={210}/>
                </div>
            </>
  )
}
