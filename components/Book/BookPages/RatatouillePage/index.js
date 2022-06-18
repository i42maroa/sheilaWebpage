import { INDEX_PAGE } from "components/Book";
import BackButton from "components/Book/BackButton";
import NextButton from "components/Book/NextButton";
import Pages from "components/Book/Pages";
import RessourceButton from "components/Book/RessourceButton";
import bookStyles from '../../Book.module.css'

export default function RatatouillePage ({ }) {
    return (   
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Ratatouille fait la cuisine</p>
                    </div>

                    <div className={bookStyles.layoutMiddleColumns}>                           
                        <p className={bookStyles.bookLineText20}>Ratatouille travaille dans un restaurant avec des femmes et il est très critiqué.</p>    
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <div className={bookStyles.imgContainer}>
                            <img src="../bookImages/ratatouille.png" height={200}></img>
                        </div>               
                    </div> 
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText20}>Les hommes cuisinent aussi, el Ratatouille veut le montrer, nous allons connaître les différents aliments qu'il utilise pour ses grands plats.</p>
                        <div className={bookStyles.layoutButton}>
                            <BackButton  page={INDEX_PAGE.SECOND_PAGE}/>
                            <RessourceButton conteNum={INDEX_PAGE.RATATOUILLE_PAGE} page={1}/>
                        </div>
                    </div>
                </>    
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Ratatouille est en forme !</p>
                        <p className={bookStyles.bookLineText20}>Ratatouille cuisine beaucoup de plats sains, mais il ne pratique aucun sport parce qu'il ne sait pas lequel coisir.</p> 
                        <p className={bookStyles.bookLineText20}>Nous allons l'aider à connaître tous les sports possibles et les adapter à ses goûts et caractéristiques physiques.</p>
                        <div className={bookStyles.layoutButton}> 
                            <RessourceButton conteNum={INDEX_PAGE.BLANCANIEVES_PAGE} page={2}/>
                            <NextButton  page={INDEX_PAGE.RATATOUILLE_PAGE + 1} />                          
                        </div>  
                    </div>
                </>
            }
        />
    )
}