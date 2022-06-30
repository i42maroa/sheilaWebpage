import styles from './Button.module.css'
import Link from 'next/link'

export default function MoiButton () {
  return (
            <>
                <div className={styles.container} >
                    <div className={styles.testButton}>
                        <Link href={'/conte/1'}>
                            <h3 className={styles.text}>MON HISTOIRE</h3>
                        </Link>
                    </div>
                </div>
            </>
  )
}
