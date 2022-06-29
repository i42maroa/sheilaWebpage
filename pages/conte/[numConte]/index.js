import Head from 'next/head'
import styles from 'styles/Conte.module.css'
import UniquePageLayout from 'layouts/UniquePageLayout'
import Book from 'components/Book'
import { useRouter } from 'next/dist/client/router'

export default function Conte () {
  const router = useRouter()
  const { numConte } = router.query

  const checkCorrectNumConte = (conte) => {
    return conte < 9 && conte > 0 ? conte : 0
  }

  return (
    <div >
      <Head>
        <title>sheilaWebpage</title>
        <meta name="description" content="WebPage personal of Sheila" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UniquePageLayout >
        <div className={styles.bookPageContainer}>
          {numConte && <Book numPage={checkCorrectNumConte(numConte)}/>}
        </div>
      </UniquePageLayout>
    </div>
  )
}
