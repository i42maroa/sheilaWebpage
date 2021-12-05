import styles from 'components/Navbar/Navbar.module.css'
import Link from 'next/link'

export default function Navbar () {
  return (
        <>
            <nav className={styles.nav}>
                <img src="headerPicture.png" alt="header" width="180" height="60">
                </img>
                <div className={styles.containerNav}>
                  <Link className={styles.a} href='/'>
                    <a className={styles.a}>Home</a></Link>
                  <Link href='/conte'><a className={styles.a}>Conte</a></Link>
                  <Link href='/ressource'><a className={styles.a}>Ressource</a></Link>
                  <Link href='/moi'><a className={styles.a}>Moi</a></Link>
                </div>
            </nav>
        </>
  )
}
