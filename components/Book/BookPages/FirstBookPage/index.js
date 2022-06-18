
import { INDEX_PAGE } from 'components/Book'
import NextButton from 'components/Book/NextButton'
import Pages from 'components/Book/Pages'
import bookStyles from '../../Book.module.css'

export default function FirstBookPage ({ }) {
    return (
        <Pages
            leftPage={
                <></>
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Je vous raconte mon histoire...</p>
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <p className={bookStyles.bookLineText20}>Je m'appelle Shreilak, j'habite dans un village très loin avec un grand château.</p>    
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <img src="../bookImages/castle.svg"></img>
                    </div>
                    <div className={bookStyles.layoutSingleColumn}>
                        <div className={bookStyles.separator}></div>
                    </div>

                    <div className={bookStyles.layoutMiddleColumns}>
                        <img src="../bookImages/princess-sheila.svg"></img>
                        </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <p className={bookStyles.bookLineText20}>Ma vie était très normale jusqu'à rècemment. Mais un jour tout a changé.</p>
                        <NextButton page={INDEX_PAGE.SECOND_PAGE} />
                    </div> 
                </>
            }
        />
    )
}