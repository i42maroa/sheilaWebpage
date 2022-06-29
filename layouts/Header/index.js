import Navbar from 'components/Navbar'
import NavBarWood from 'components/SVG/navBar'
import styles from './Header.module.css'

export default function Header () {
  return (
        <>
            <div className={styles.head}>
                <div className={styles.headTitle}>
                  <NavBarWood/>
                </div>
                <Navbar></Navbar>
            </div>
        </>
  )
}
