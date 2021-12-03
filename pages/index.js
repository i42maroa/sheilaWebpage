import Head from 'next/head'
import styles from 'styles/Home.module.css'
import Button from '@c/Button'
import Navbar from '@c/Navbar'
import PageLayout from '@c/PageLayout'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <PageLayout>
        <Navbar></Navbar>    
        <h1 className={styles.title}> Sheila web page</h1>
        <Button >
          pulsa
        </Button>
      </PageLayout>
      {/* </main> */}
    </div>
  )
}
