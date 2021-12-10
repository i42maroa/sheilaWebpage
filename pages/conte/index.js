import Head from 'next/head'
import styles from 'styles/Conte.module.css'
import PageLayout from 'layouts/PageLayout'
import ConteComponent from 'components/ConteComponent'

export default function Conte () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>

        <div className={styles.main_column}>
          <h1 className={styles.title}>Conte</h1>

          <ConteComponent></ConteComponent>
        </div>

        <div className={styles.secondary_column}>
        <h3>Lista Cuentos</h3>
          <lu className={styles.luConte}>
           <li className={styles.liConte}><h4><strong>Tema 1:</strong> Caperucita</h4></li>
           <li className={styles.liConte}><h4><strong>Tema 2:</strong> El lobo feroz</h4></li>
           <li className={styles.liConte}><h4><strong>Tema 3:</strong> Principito</h4></li>
          </lu>
        </div>

      </PageLayout>
    </div>
  )
}
