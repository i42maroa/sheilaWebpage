import Navbar from 'components/Navbar'
import styles from './Header.module.css'

export default function Header ({}) {
  return (
        <>
            <div className={styles.head}>
                <div className={styles.headTitle}>
                  <h1 className={styles.h1}>Le conte de Sheila</h1>
                </div>
                <Navbar></Navbar>
            </div>
            
        </>
  )
}