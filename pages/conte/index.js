import Head from 'next/head'
import styles from 'styles/Conte.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'
import BookSVG from 'components/SVG/book'

export default function Conte () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UniquePageLayout>

        <div className={styles.bookContainer}> 
          <BookSVG/>

          <div className={styles.bookPageContainer}>
              
              <div className={styles.bookLeftPage}>
                <p>d</p>
              </div>

              <div className={styles.bookRightPage}>
              <img src='princess-sheila.svg' height={200}></img>
              <img src='castle.svg' height={200}></img>
              </div>
          </div>
        </div>
        
       
      </UniquePageLayout>
    </div>
  )
}
