import Head from 'next/head'
import styles from 'styles/Home.module.css'
import PageLayout from 'layouts/PageLayout'
import Perfil from 'components/Perfil'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
         <div className={styles.main_column}>

         </div>
        <div className={styles.secondary_column}>
        <Perfil></Perfil>
        </div>
      </PageLayout>
    </div>
  )
}
