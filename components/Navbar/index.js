import styles from 'components/Navbar/Navbar.module.css'
import SingleWoodBar from 'components/SVG/singleWoodBar'
import Link from 'next/link'

export default function Navbar () {
  return (
        <>
            <nav className={styles.nav}>
                <div className={styles.containerNav}>
                  <div className={styles.containerLink}>
                    <SingleWoodBar/>
                    <Link href='/conte/1'><a className={styles.a}>Conte</a></Link>
                  </div>
                  <div className={styles.containerLink}>
                    <SingleWoodBar/>
                    <Link href='/ressource'><a className={styles.a}>Ressource</a></Link>
                  </div>
                  <div className={styles.containerLink}>
                    <SingleWoodBar/>
                    <Link href='/'><a className={styles.a}>Moi</a></Link>
                  </div>
                </div>
            </nav>
        </>
  )
}
