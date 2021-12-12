import Head from 'next/head'
import styles from 'styles/Ressource.module.css'
import PageLayout from 'layouts/PageLayout'
import { useEffect, useState } from 'react'
import Finder from 'components/Finder'
import Tag from 'components/Tag'

import Post from 'components/Post'
// import { fetchResourcesFirebaseDB } from 'firebase/start'
import { fetchResourcesFirebaseDB } from 'prueba/prueba'
// import { prueba } from 'firebase/client'

export default function Ressource () {
  // const [titleListPost, setTitleListPost] = useState('Ultimas aportaciones')
  const [resourcesLine, setResourcesLine] = useState([])

  useEffect(() => {
    fetchResourcesFirebaseDB().then(setResourcesLine)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
         <div className={styles.main_column}>
          {/* <ListPost title={titleListPost} ></ListPost> */}
           {resourcesLine.map(
             ({ id, title, src, description, tags, createdAt }) => (
            <Post
              key={id}
              id={id}
              title={title}
              src={src}
              description={description}
              tags={tags}
              createdAt={createdAt}
            />
             )
           )}
         </div>
        <div className={styles.secondary_column}>

          <Finder></Finder>

          <h3>Lista temas</h3>
          <lu className={styles.luTheme}>
           <li className={styles.liTheme}><h4><strong>Tema 1:</strong> Carlos cabezon</h4></li>
           <li className={styles.liTheme}><h4><strong>Tema 2:</strong> jeje saludos</h4></li>
           <li className={styles.liTheme}><h4><strong>Tema 3:</strong> Buenas tardes</h4></li>
          </lu>

          <h3>Tags</h3>
          <lu className={styles.luTheme}>
              <Tag>Furbo</Tag>
              <Tag>Jeje</Tag>
              <Tag>Hola</Tag>
              <Tag>Buenas</Tag>
          </lu>
        </div>
      </PageLayout>

    </div>
  )
}
