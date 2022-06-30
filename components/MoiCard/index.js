import MoiButton from './Button'
import styles from './MoiCard.module.css'

export default function MoiCard () {
  return (
          <>
            <div className={styles.postContainer}>
              <div className={styles.textContainer}>
                <p className={styles.text}> 
                  Bienvenue sur mon site web, je m&apos;appelle Sheila, je suis maitresse de français. 
                  J&apos;ai créé cette plateforme en ligne pour motiver mes enfants à apprendre une nouvelle langue comme le français. 
                  Connaître d&apos;autres cultures nous ouvre la porte de la sagesse. 
                  Malheureusement, avec une seule heure par semaine on doit faire de notre mieux pour que nos élèves apprennent le français, nous avons de pain sur la planche. 
                  On y va !
                </p>
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
