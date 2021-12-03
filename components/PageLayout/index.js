import styles from 'components/PageLayout/PageLayout.module.css'

export default function PageLayout ({ children }) {
  return (
        <>
            <main className={styles.main}>
                { children }
            </main>
        </>
  )
}
