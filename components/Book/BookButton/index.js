import ButtonTitleBook from 'components/SVG/button'
import styles from './BookButton.module.css'

export default function BookButton ({ children, onclick }) {
    return (
            <>
                <div className={styles.container} onClick={onclick}>
                    
                    <div className={styles.testButton}>
                        <h3 className={styles.text}>{children}</h3></div>
                    <ButtonTitleBook width={210}/>
                </div>
                {/* <button className={styles.buttonBack} onClick={onclick}>

                    { children }
                </button> */}
            </>
    )
  }