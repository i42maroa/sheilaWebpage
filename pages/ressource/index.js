import Head from 'next/head'
import styles from 'styles/Ressource.module.css'
import PageLayout from 'layouts/PageLayout'
import Post from 'components/Post'

export default function Ressource () {
  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
         <div className={styles.main_column}>
           <h2>Ultimas aportaciones</h2>
          <Post title="First resource" src="resource.png" description="Es el mejor recurso porque se lo hemos robado a frances hasta en la sopa"></Post>
          <Post title="Second resource" src="resource2.png" description="Me encanta robar" ></Post>
         </div>
        <div className={styles.secondary_column}>

        </div>
      </PageLayout>

    </div>
  )
}
