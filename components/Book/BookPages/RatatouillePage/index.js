import { INDEX_PAGE } from 'components/Book'
import Pages from 'components/Book/Pages'
import RessourceButton from 'components/Book/RessourceButton'
import bookStyles from '../../Book.module.css'

export default function RatatouillePage () {
  return (
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Ratatouille fait la cuisine</p>
                    </div>
                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            <img className={bookStyles.floatLeft} src="../bookImages/ratatouille.png" height={200}></img>
                            Ratatouille travaille dans un restaurant avec des femmes et il est très critiqué. Les hommes cuisinent aussi, el Ratatouille veut le montrer, nous allons connaître les différents aliments qu&apos;il utilise pour ses grands plats.
                        </p>
                    </div>
                    <div className={bookStyles.layoutButton}>
                        <RessourceButton conteNum={INDEX_PAGE.RATATOUILLE_PAGE} page={1}/>
                    </div>
                </>
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                    <p className={bookStyles.bookLineText30}>Ratatouille est en forme !</p>
                    </div>
                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            Ratatouille cuisine beaucoup de plats sains, mais il ne pratique aucun sport parce qu&apos;il ne sait pas lequel coisir.
                        Nous allons l&apos;aider à connaître tous les sports possibles et les adapter à ses goûts et caractéristiques physiques.</p>
                    </div>
                    <div className={bookStyles.layoutButton}>
                        <RessourceButton conteNum={INDEX_PAGE.BLANCANIEVES_PAGE} page={2}/>
                    </div>
                </>
            }
            backButton={INDEX_PAGE.SECOND_PAGE}
            nextButton={INDEX_PAGE.RATATOUILLE_PAGE + 1}
        />
  )
}
