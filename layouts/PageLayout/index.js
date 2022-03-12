import Navbar from 'components/Navbar'
import Header from 'layouts/Header'
import styles from './PageLayout.module.css'

export default function PageLayout ({ children }) {
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
