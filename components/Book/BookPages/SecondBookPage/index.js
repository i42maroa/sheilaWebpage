
import { INDEX_PAGE } from 'components/Book'
import Pages from 'components/Book/Pages'
import BookButton from 'components/Book/BookButton'
import bookStyles from '../../Book.module.css'
import styles from './SecondBookPage.module.css'
import BackButton from 'components/Book/BackButton'

export default function SecondBookPage ({ setPageBook }) {
    return (     
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}> Maintenant, j'ai un problème...</p>    
                    </div>             
                    <div className={bookStyles.layoutMiddleColumns}>                    
                        <p className={bookStyles.bookLineText20}>Una sorcière mèchante et envieuse a jeté un sortilège sur moir</p>    
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <div className={bookStyles.imgContainer}>
                            <img src="bookImages/witch.png" height={200}></img>
                        </div>               
                    </div>    
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Elle m'a transformée en ogresse !!</p>
                    </div> 
                    <div className={bookStyles.layoutMiddleColumns}>
                        <div className={bookStyles.imgContainer}>
                            <img src="bookImages/shreilak.svg" width={180}></img>
                        </div> 
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <p className={bookStyles.bookLineText20}>Je besoin l'aide de mes élèves pour retrouver mon aspect normal!</p>
                        <BackButton className={bookStyles.buttonContainer} setPageBook={setPageBook} page={INDEX_PAGE.FIRST_PAGE}/>
                    </div>
                </>
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText20}>Ils doivent résoudre les problématiques des personnages de certains contes.</p>                    
                        <p className={bookStyles.bookLineText30}>Pouvez-vous m'aider, s'il vous plaît?</p>
                    </div>

                    <div className={styles.boxButtonContes}>       
                        <BookButton className={styles.buttonBook} onclick={()=>setPageBook(INDEX_PAGE.SPIDERMAN_PAGE)}>SpiderMan</BookButton>
                        <BookButton className={styles.buttonBook} onclick={()=>setPageBook(INDEX_PAGE.FROZEN_PAGE)}>Frozen</BookButton>
                        <BookButton className={styles.buttonBook} onclick={()=>setPageBook(INDEX_PAGE.RATATOUILLE_PAGE)}>Ratatouille</BookButton>
                        <BookButton className={styles.buttonBook} onclick={()=>setPageBook(INDEX_PAGE.CAPERUCITA_PAGE)}>Caperucita</BookButton>
                        <BookButton className={styles.buttonBook} onclick={()=>setPageBook(INDEX_PAGE.BLANCANIEVES_PAGE)}>Blancanieves</BookButton>
                        <BookButton className={styles.buttonBook} onclick={()=>setPageBook(INDEX_PAGE.SHREILAK_PAGE)}>Shreilak</BookButton>
                    </div>             
                </>
            }
        />
    )
}