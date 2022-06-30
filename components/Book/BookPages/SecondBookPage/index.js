import { INDEX_PAGE } from 'components/Book'
import Pages from 'components/Book/Pages'
import BookButton from 'components/Book/BookButton'
import bookStyles from '../../Book.module.css'
import styles from './SecondBookPage.module.css'
import { useWindowSize } from 'hooks/screenWidth'

export default function SecondBookPage () {
    const size = useWindowSize()
  return (
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Maintenant, j&apos;ai un problème...</p>
                    </div>
                    { size.width > 800 && <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            <img src="../bookImages/witch.png" height={180} className={bookStyles.floatRight}/>
                            Una sorcière mèchante et envieuse a jeté un sortilège sur moir
                        </p>
                        <br></br>            
                        <p className={bookStyles.bookLineText30}>Elle m&apos;a transformée en ogresse !!</p>
                        <p className={bookStyles.bookLineText20}>
                            <img src="../bookImages/shreilak.svg" height={170} className={bookStyles.floatLeft}/>
                            Je besoin l&apos;aide de mes élèves pour retrouver mon aspect normal!
                        </p>
                    </div> }

                    { size.width <= 800 && <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>                       
                            Una sorcière mèchante et envieuse a jeté un sortilège sur moir
                        </p>
                        <div className={bookStyles.containerImage}>
                            <img src="../bookImages/witch.png" height={180} className={bookStyles.imageResponsive}/>
                        </div>          
                        <p className={bookStyles.bookLineText30}>Elle m&apos;a transformée en ogresse !!</p>
                        <p className={bookStyles.bookLineText20}>             
                            Je besoin l&apos;aide de mes élèves pour retrouver mon aspect normal!
                        </p>
                        <div className={bookStyles.containerImage}>
                            <img src="../bookImages/shreilak.svg" height={170} className={bookStyles.imageResponsive}/>
                        </div>  
                    </div> }
                </>
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>Ils doivent résoudre les problématiques des personnages de certains contes.</p>
                        <p className={bookStyles.bookLineText30}>Pouvez-vous m&apos;aider, s&apos;il vous plaît?</p>
                    
                        <div className={styles.boxButtonContes}>
                            <BookButton className={styles.buttonBook} page={INDEX_PAGE.SPIDERMAN_PAGE}>SpiderMan</BookButton>
                            <BookButton className={styles.buttonBook} page={INDEX_PAGE.FROZEN_PAGE}>Frozen</BookButton>
                            <BookButton className={styles.buttonBook} page={INDEX_PAGE.RATATOUILLE_PAGE}>Ratatouille</BookButton>
                            <BookButton className={styles.buttonBook} page={INDEX_PAGE.CAPERUCITA_PAGE}>Caperucita</BookButton>
                            <BookButton className={styles.buttonBook} page={INDEX_PAGE.BLANCANIEVES_PAGE}>Blancanieves</BookButton>
                            <BookButton className={styles.buttonBook} page={INDEX_PAGE.SHREILAK_PAGE}>Shreilak</BookButton>
                        </div>
                    </div>                 
                </>
            }
            backButton={INDEX_PAGE.FIRST_PAGE}
        />
  )
}
