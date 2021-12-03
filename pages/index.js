import Head from 'next/head'
import styles from 'styles/Home.module.css'
import Link from 'next/link'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}> Sheila web page</h1>
        <nav className={styles.nav}>
          <Link href='/conte'>Conte</Link>
          <Link href='/ressource'>Resource</Link>
          <Link href='/moi'>Moi</Link>

        </nav>

      </main>
    </div>
  )
}
