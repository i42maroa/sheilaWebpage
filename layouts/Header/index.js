import Navbar from 'components/Navbar'
import NavBarWood from 'components/SVG/navBar'
import ShortHeader from 'components/SVG/shortNavBar'
import styles from './Header.module.css'

export default function Header () {
  return (
        <>
            <div className={styles.head}>
                <div className={styles.headTitle}>
                  {/* <NavBarWood/> */}
                  <ShortHeader/>
                </div>
                <Navbar></Navbar>
            </div>
        </>
  )
}
