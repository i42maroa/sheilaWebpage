import Head from 'next/head'
import styles from 'styles/Ressource.module.css'
import Navbar from '@c/Navbar'
import PageLayout from '@c/PageLayout'

export default function Ressource () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <Navbar></Navbar>
        <h1 className={styles.title}>Ressource</h1>
      </PageLayout>

    </div>
  )
}
