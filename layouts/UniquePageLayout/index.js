import Navbar from 'components/Navbar'
import styles from './UniquePageLayout.module.css'

export default function UniquePageLayout ({ children }) {
  return (
        <>
            <div className={styles.main}>
              <Navbar></Navbar>
                  { children }
            </div>

        </>
  )
}
