import styles from './Finder.module.css'

export default function Finder () {
  return (
            <>
                <div className={styles.finderContainer}>
                    <input placeholder="Introduce tema para buscar"></input>
                    <button> Search</button>
                </div>

            </>
  )
}
