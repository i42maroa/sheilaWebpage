import Head from 'next/head'
import styles from 'styles/Home.module.css'
import PageLayout from 'layouts/PageLayout'
import Perfil from 'components/Perfil'
import SingleWoodBar from 'components/SVG/singleWoodBar'

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
           <h1>EL CONTE DU SHEILA</h1>
           <img src="/sheila.jpg" alt="El conte du sheila" height="200px" width="200px"/>
           <p>Descripcion de lo que consiste el cuento de sheila</p>
           <SingleWoodBar/>
           <h2>OBJETIVOS</h2>
           <ul>
             <li>Primer objetivo</li>
             <li>Segundo  objetivo</li>
           </ul>
         </div>
        <div className={styles.secondary_column}>
        <Perfil></Perfil>
        </div>
      </PageLayout>
    </div>
  )
}
