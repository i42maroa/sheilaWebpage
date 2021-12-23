
import Navbar from 'components/Navbar'
import styles from './PageLayout.module.css'

export default function PageLayout ({ children }) {
  return (
        <>
            <div className={styles.main}>
              <div className={styles.head}>
                <h1 className={styles.h1}>Le conte de Sheila</h1>
              </div>
              <Navbar></Navbar>
                <div className={styles.column}>
                  { children }
                </div>
            </div>

        </>
  )
}
