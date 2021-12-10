import Head from 'next/head'
import styles from 'styles/Ressource.module.css'
import PageLayout from 'layouts/PageLayout'
import ListPost from 'components/ListPost'
import React, { useState } from 'react'
import Finder from 'components/Finder'
import Tag from 'components/Tag'

export default function Ressource () {
  const [titleListPost, setTitleListPost] = useState('Ultimas aportaciones')

  setTitleListPost()

  return (
    <div className={styles.container}>
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
         <div className={styles.main_column}>
          <ListPost title={titleListPost} ></ListPost>
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
