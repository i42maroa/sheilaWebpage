import Head from 'next/head'
import styles from 'styles/Conte.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'
import BookSVG from 'components/SVG/book'
import FirstPageSVG from 'components/SVG/firstPage'
import SecondPageSVG from 'components/SVG/secondPage'

export default function Conte () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UniquePageLayout>

      <div className={styles.bookPageContainer}>
        <div className={styles.firstPage}>
          <FirstPageSVG/>
        </div>

        <div className={styles.secondPage}>
          <SecondPageSVG/>
        </div>      
      </div>             
      </UniquePageLayout>
    </div>
  )
}
