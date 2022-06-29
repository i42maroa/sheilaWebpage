import Head from 'next/head'
import styles from 'styles/Moi.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'
import Book, { INDEX_PAGE } from 'components/Book'

export default function Moi () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UniquePageLayout>
        <div className={styles.bookPageContainer}>
          <Book numPage={INDEX_PAGE.MOI_PAGE}/>
        </div>
      </UniquePageLayout>
    </div>
  )
}
