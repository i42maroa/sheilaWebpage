import Head from 'next/head'
import styles from 'styles/Conte.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'
import BookSVG from 'components/SVG/book'
import FirstPageSVG from 'components/SVG/firstPage'
import SecondPageSVG from 'components/SVG/secondPage'
import Button from 'components/Button'
import { useState } from 'react/cjs/react.development'

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
        { page === 0 && 
          <div className={styles.bookPage} >
            <FirstPageSVG />
            <button className={styles.elementPage} onClick={() => setPageBook((page + 1)%2)}> Next</button> 
          </div>  
         }
        { page === 1 &&
          <div className={styles.bookPage} >
            <SecondPageSVG  />
            
            <button className={styles.elementPage} onClick={() => setPageBook((page + 1)%2)}>Back</button> 

            <div className={styles.boxButtonContes}>
              <button className={styles.buttonBook}>SpiderMan</button> 
              <button className={styles.buttonBook}>Frozen</button> 
              <button className={styles.buttonBook}>Ratatouille</button> 
              <button className={styles.buttonBook}>Caperucita</button> 
              <button className={styles.buttonBook}>Blancanieves</button>
            </div>       
          </div> }         
      </div> 
      
      
      

      {/* <Button className={styles.secondPage} >Next</Button> */}

      </UniquePageLayout>
    </div>
  )
}
