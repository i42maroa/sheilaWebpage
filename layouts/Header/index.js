import Navbar from 'components/Navbar'
import ShreilakLetter from 'components/SVG/shreilakLetter'
import WoodHeader from 'components/SVG/woodHeader'
import styles from './Header.module.css'

export default function Header ({}) {
  return (
        <>
            <div className={styles.head}>
                <div className={styles.headTitle}>
                  <ShreilakLetter className={styles.shreilakTitle}/>
                  <WoodHeader/>              
                </div>
                <Navbar></Navbar>
            </div>           
        </>
  )
}