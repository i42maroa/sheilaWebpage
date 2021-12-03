import styles from 'components/Navbar/Navbar.module.css'
import Link from 'next/link'

export default function Navbar () {
  return (
        <>
            <nav className={styles.nav}>
                <Link href='/'>Home</Link>
                <Link href='/conte'>Conte</Link>
                <Link href='/ressource'>Resource</Link>
                <Link href='/moi'>Moi</Link>
            </nav>
        </>
  )
}
