import Head from 'next/head'
import styles from 'styles/Conte.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'
import BookSVG from 'components/SVG/book'
import FirstPageSVG from 'components/SVG/firstPage'
import SecondPageSVG from 'components/SVG/secondPage'
import Button from 'components/Button'
import { useState } from 'react/cjs/react.development'
import SecondBookPage from 'components/BookPages/SecondBookPage'
import FirstBookPage from 'components/BookPages/FirstBookPage'


export const INDEX_PAGE ={
  FIRST_PAGE: 0,
  SECOND_PAGE: 1,
  SPIDERMAN_PAGE: 2
}

export default function Conte () {

  const [page, setPageBook] = useState(0); 


  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UniquePageLayout>

      <div className={styles.bookPageContainer}>
        { page === INDEX_PAGE.FIRST_PAGE && 
          <FirstBookPage className={styles.bookPage}
            onClick={() => setPageBook(INDEX_PAGE.SECOND_PAGE)} ></FirstBookPage>}

        { page === INDEX_PAGE.SECOND_PAGE && 
          <SecondBookPage className={styles.bookPage} 
          onClick={() => setPageBook(this)}></SecondBookPage>}         
      </div>   

      </UniquePageLayout>
    </div>
  )
}
