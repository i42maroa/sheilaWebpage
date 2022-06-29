import styles from './RessourceButton.module.css'
import Link from 'next/link'

export default function RessourceButton ({ conteNum, page }) {
    return (
            <>
                <div className={styles.container} >
                    <div className={styles.testButton}>
                        <Link href={`/ressource?numConte=${conteNum}&numPage=${page}`}>
                            <h3 className={styles.text}>RESSOURCE</h3>
                        </Link>
                    </div>
                </div>
            </>
    )
  }