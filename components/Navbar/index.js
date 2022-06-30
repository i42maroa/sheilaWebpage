import styles from 'components/Navbar/Navbar.module.css'
import SingleWoodBar from 'components/SVG/singleWoodBar'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

export default function Navbar () {
  const router = useRouter()
  const pathName = router.pathname

  const PATH_ROUTES = {
    CONTE: "/conte/[numConte]",
    RESSOURCE: "/ressource",
    MOI:'/'
  }

  return (
        <>
            <nav className={styles.nav}>
                <div className={styles.containerNav}>
                  <div className={styles.containerLink}>
                    <SingleWoodBar />
                    <Link href='/conte/1'><a className={`${styles.a} ${pathName === PATH_ROUTES.CONTE ? styles.select : ''}`}>Conte</a></Link>
                  </div>
                  <div className={styles.containerLink}>
                    <SingleWoodBar/>
                    <Link href='/ressource'><a className={`${styles.a} ${pathName === PATH_ROUTES.RESSOURCE ? styles.select : ''}`}>Ressource</a></Link>
                  </div>
                  <div className={styles.containerLink}>
                    <SingleWoodBar/>
                    <Link href='/'><a className={`${styles.a} ${pathName === PATH_ROUTES.MOI ? styles.select : ''}`}>Moi</a></Link>
                  </div>
                </div>
            </nav>
        </>
  )
}
