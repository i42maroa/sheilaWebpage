import MoiButton from './Button'
import styles from './MoiCard.module.css'

export default function MoiCard () {
  return (
          <>
            <div className={styles.postContainer}>
              <div className={styles.textContainer}>
                <p className={styles.text}> Bonjour! soy Sheila y estoy opositando para estoy opositando acony esta es mi historia</p>
              </div>
              <div className={styles.imageContainer}>
                <img className={styles.image} src="./sheila-portada-final.svg" width={400}/>
              </div>
              <div className={styles.buttonContainer}>
                <MoiButton/>
              </div>

            </div>
          </>
  )
}
