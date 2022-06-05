import Head from 'next/head'
import styles from 'styles/Conte.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'
import Book from 'components/Book'

export default function Conte () {

  return (
    <div >
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UniquePageLayout >   
        <div className={styles.bookPageContainer}>
          <Book/>
        </div>
      </UniquePageLayout>
    </div>
  )
}
