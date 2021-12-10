import Head from 'next/head'
import styles from 'styles/Moi.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'

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
            <h2>Soy Sheila Denamiel</h2>
            <p>Hola, soy sheila denamiel y soy tal cual y para cual</p>

            <p>Mis objetivos con esta página web son tal cual para cual</p>

            <p>Contacto conmigo</p>
        </div>
      </UniquePageLayout>
    </div>
  )
}
