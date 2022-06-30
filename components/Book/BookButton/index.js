import ButtonTitleBook from 'components/SVG/button'
import Link from 'next/link'
import styles from './BookButton.module.css'
import { useWindowSize } from 'hooks/screenWidth'

export default function BookButton ({ children, page }) {
    const size = useWindowSize()
  return (
            <>
                <div className={styles.container} >
                    <div className={styles.testButton}>
                        { size.width > 800 && <Link href={`/conte/${page}`} >
                            <h3 className={styles.text}>{children}</h3>
                        </Link> }
                        { size.width <= 800 && <a href={`#section_${page}`} >
                            <h3 className={styles.text}>{children}</h3>
                        </a> }
                    </div>

                    <ButtonTitleBook className={styles.svg} background={'#775602'} />
                </div>
            </>
  )
}
