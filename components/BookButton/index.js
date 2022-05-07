import styles from './BookButton.module.css'

export default function BookButton ({ children, onclick }) {
    return (
            <>
                <button className={styles.buttonBack} onClick={onclick}>
                    { children }
                </button>
            </>
    )
  }