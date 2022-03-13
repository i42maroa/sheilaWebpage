import Head from 'next/head'
import styles from 'styles/Moi.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'
import BookSVG from 'components/SVG/book'
import ShreilakLetter from 'components/SVG/shreilakLetter'
import WoodHeader from 'components/SVG/woodHeader'

export default function Moi () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UniquePageLayout>
        <div className={styles.main_column}>
    
       <ShreilakLetter/>
        </div>
      </UniquePageLayout>
    </div>
  )
}
