import Head from 'next/head'
import styles from 'styles/Moi.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'
import MoiCard from 'components/MoiCard'

export default function Moi () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UniquePageLayout>
        <MoiCard/>
      </UniquePageLayout>
    </div>
  )
}
