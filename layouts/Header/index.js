import Navbar from 'components/Navbar'
import ShreilakLetter from 'components/SVG/shreilakLetter'
import WoodHeader from 'components/SVG/woodHeader'
import styles from './Header.module.css'

export default function Header ({}) {
  return (
        <>
            <div className={styles.head}>
                <div className={styles.headTitle}>
                  <WoodHeader/>
                  <div className={styles.shreilakTitle}>
                    <ShreilakLetter/>
                  </div>    
                </div>
                <Navbar></Navbar>
            </div>           
        </>
  )
}