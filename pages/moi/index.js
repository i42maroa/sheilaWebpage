import Head from 'next/head'
import styles from 'styles/Moi.module.css'
import PageLayout from 'layouts/PageLayout'

export default function Moi () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>

        <div>
          <h1 className={styles.title}>Moi</h1>
        </div>

        <div>
          d
        </div>

        </PageLayout>
    </div>
  )
}
