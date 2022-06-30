import MoiButton from './Button'
import styles from './MoiCard.module.css'

export default function MoiCard () {
  return (
          <>
            <div className={styles.postContainer}>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Bienvenue sur mon site web !!</h2>
                <p className={styles.text}>
                  Je m&apos;appelle Sheila, je suis maitresse de français.
                  J&apos;ai créé cette plateforme en ligne pour motiver mes enfants à apprendre une nouvelle langue comme le français.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src="./sheila-portada-final.svg" width={400}/>
                </div>
                <p className={styles.textBold}>Connaître d&apos;autres cultures nous ouvre la porte de la sagesse.</p>
                <p className={styles.text}>
                  Malheureusement, avec une seule heure par semaine on doit faire de notre mieux pour que nos élèves apprennent le français, nous avons de pain sur la planche.
                  On y va !
                </p>
              </div>

              <div className={styles.buttonContainer}>
                <MoiButton/>
              </div>

            </div>
          </>
  )
}
