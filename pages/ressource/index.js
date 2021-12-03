import Head from 'next/head'
import styles from 'styles/Ressource.module.css'
import Link from 'next/link'

export default function Ressource () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <nav className={styles.nav}>
          <Link href='/'>Home</Link>
        </nav>
        <h1 className={styles.title}>Conte</h1>

      </main>
    </div>
  )
}
