
import { INDEX_PAGE } from 'components/Book'
import Pages from 'components/Book/Pages'
import bookStyles from '../../Book.module.css'
import { useWindowSize } from 'hooks/screenWidth'

export default function FirstBookPage () {
  const size = useWindowSize()
  return (
        <Pages
            showLeft={ size.width > 800 }
            leftPage={
                <></>
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Je vous raconte mon histoire...</p>
                    </div>
                    { size.width > 800 && <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            <img className={bookStyles.floatRight} src="../bookImages/castle.svg" height={180}/>
                            Je m&apos;appelle Shreilak, j&apos;habite dans un village très loin avec un grand château.
                        </p>
                        <p className={bookStyles.bookLineText20}>
                            <img className={bookStyles.floatLeft} src="../bookImages/princess-sheila.svg" height={180}/>
                            Ma vie était très normale jusqu&apos;à rècemment. Mais un jour tout a changé.
                        </p>
                    </div> }
                    { size.width <= 800 && <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            Je m&apos;appelle Shreilak, j&apos;habite dans un village très loin avec un grand château.
                        </p>
                        <div className={bookStyles.containerImage}>
                            <img className={bookStyles.imageResponsive} src="../bookImages/castle.svg" height={180}/>
                        </div>
                        <p className={bookStyles.bookLineText20}>
                            Ma vie était très normale jusqu&apos;à rècemment. Mais un jour tout a changé.
                        </p>
                        <div className={bookStyles.containerImage}>
                            <img className={bookStyles.imageResponsive} src="../bookImages/princess-sheila.svg" height={180}/>
                        </div>
                    </div> }
                </>
            }
            nextButton={INDEX_PAGE.SECOND_PAGE}
        />
  )
}
