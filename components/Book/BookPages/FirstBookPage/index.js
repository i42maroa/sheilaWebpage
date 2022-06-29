
import { INDEX_PAGE } from 'components/Book'
import Pages from 'components/Book/Pages'
import bookStyles from '../../Book.module.css'

export default function FirstBookPage () {
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
                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            <img className={bookStyles.floatRight} src="../bookImages/castle.svg" height={200}/>
                            Je m&apos;appelle Shreilak, j&apos;habite dans un village très loin avec un grand château.
                        </p>
                    </div>
                    {/* <div className={bookStyles.layoutSingleColumn}>
                        <div className={bookStyles.separator}></div>
                    </div> */}

                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            <img className={bookStyles.floatLeft} src="../bookImages/princess-sheila.svg" height={200}/>
                            Ma vie était très normale jusqu&apos;à rècemment. Mais un jour tout a changé.
                        </p>
                    </div>
                </>
            }
            nextButton={INDEX_PAGE.SECOND_PAGE}
        />
  )
}
