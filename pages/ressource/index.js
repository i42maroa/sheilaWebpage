import Head from 'next/head'
import styles from 'styles/Ressource.module.css'
import { useEffect, useState } from 'react'

import Post from 'components/Post'
// import { fetchResourcesFirebaseDB } from 'firebase/start'
import { fetchResourcesFirebaseDB } from 'prueba/prueba'
// import { useRouter } from 'next/dist/client/router'
import UniquePageLayout from 'layouts/UniquePageLayout'
// import { prueba } from 'firebase/client'

export default function Ressource () {
  // const [titleListPost, setTitleListPost] = useState('Ultimas aportaciones')
  const [resourcesLine, setResourcesLine] = useState([])

  // const router = useRouter()
  // const { numConte, numPage } = router.query

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

      <UniquePageLayout>
         <div className={styles.main_column}>
           {resourcesLine.map(
             ({ id, mainTitle, mainFooter, mainDescription, section, tags, createdAt }, index, array) => (
            <>
              <Post
                key={id}
                id={id}
                mainTitle={mainTitle}
                mainFooter={mainFooter}
                mainDescription={mainDescription}
                section={section}
                tags={tags}
                createdAt={createdAt}
              />
              { array.length !== index + 1 ? <div className={styles.postSeparator}></div> : <></>}
            </>
             )
           )}
         </div>

      </UniquePageLayout>

    </div>
  )
}
