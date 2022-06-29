import { INDEX_PAGE } from 'components/Book'
import Pages from 'components/Book/Pages'
import RessourceButton from 'components/Book/RessourceButton'

import bookStyles from '../../Book.module.css'

export default function BlancanievesPage () {
  return (
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Blanche-Neige et les 7 géants</p>
                    </div>
                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            Blanche-Neige a trouvé une maison avec sept géants, ils sont très maladroits et ils heurtent contre les murs.
                            Ils sont très machistes et grognons, mais ils sont sous le sortilège d&apos;une sorcière puisqu&apos;ils étaient des mains.
                            Essaie de démontrer aux géants que tout travail peut être fait par une femme.
                        </p>
                    </div>
                    <div className={bookStyles.layoutButton}>
                        <RessourceButton conteNum={INDEX_PAGE.BLANCANIEVES_PAGE} page={1}/>
                    </div>
                </>
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Elle porte un survêtement</p>
                    </div>

                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            <img src="../bookImages/ratatouille.png" className={bookStyles.floatRight} height={200}/>
                            Blanche-Neige est fatiguée de porter toujours des robes et des talons.
                            Elle veut un style plus décontracté, pourquoi pas de jeans ?
                            Aidez-la à acheter des vêtements dans le magasin pour son quotidien.
                        </p>
                    </div>
                    <div className={bookStyles.layoutButton}>
                        <RessourceButton conteNum={INDEX_PAGE.BLANCANIEVES_PAGE} page={2}/>
                    </div>
                </>
            }
            backButton={INDEX_PAGE.SECOND_PAGE}
            nextButton={INDEX_PAGE.BLANCANIEVES_PAGE + 1}
        />
  )
}
