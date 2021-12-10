
import Navbar from 'components/Navbar'
import styles from './PageLayout.module.css'

export default function PageLayout ({ children }) {
  return (
        <>
            <div className={styles.main}>
              <Navbar></Navbar>
                <div className={styles.column}>
                  { children }
                </div>
            </div>

        </>
  )
}
