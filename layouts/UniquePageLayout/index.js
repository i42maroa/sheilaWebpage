import Navbar from 'components/Navbar'
import Header from 'layouts/Header'
import styles from './UniquePageLayout.module.css'

export default function UniquePageLayout ({ children }) {
  return (
        <>
            <div className={styles.main}>
              <Header></Header>
              <div className={styles.column}>
                  { children }
                </div>
            </div>

        </>
  )
}
