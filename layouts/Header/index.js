import Navbar from 'components/Navbar'
import NavBarWood from 'components/SVG/navBar'
import ShortHeader from 'components/SVG/shortNavBar'
import styles from './Header.module.css'
import { useWindowSize } from '../../hooks/screenWidth'

export default function Header () {
  const size = useWindowSize()
  return (
        <>
            <div className={styles.head}>
                <div className={styles.headTitle}>
                    {size.width > 800 && <NavBarWood/> }
                    {size.width <= 800 && <ShortHeader/> }
                </div>
                <Navbar></Navbar>
            </div>
        </>
  )
}
