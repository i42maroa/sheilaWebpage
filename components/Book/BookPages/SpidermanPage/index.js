import { INDEX_PAGE } from "components/Book";
import BackButton from "components/Book/BackButton";
import NextButton from "components/Book/NextButton";
import Pages from "components/Book/Pages";
import RessourceButton from "components/Book/RessourceButton";

import bookStyles from '../../Book.module.css'

export default function SpiderManPage ({ setPageBook }) {
    return (   
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>La Routine de Peter</p>
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <p className={bookStyles.bookLineText20}> Peter Parker a une vie très stressante. Il va à l'université, mais il doit aussi aller sauver le monde quand les gens en ont besoin.</p>    
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <img src="../bookImages/spiderMan_1.png" height={180}></img>
                    </div>
                    <div className={bookStyles.layoutSingleColumn}>
                        <div className={bookStyles.separator}></div>
                    </div>

                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText20}>Nous devons l'aider à mener une vie plus calme.</p>
                        <div className={bookStyles.layoutButton}>
                            <BackButton page={INDEX_PAGE.SECOND_PAGE}/>
                            <RessourceButton conteNum={INDEX_PAGE.SPIDERMAN_PAGE} page={1}/>
                        </div>
                    </div> 
                </>    
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Une machine de monstres</p>              
                        <p className={bookStyles.bookLineText20}> La peur atteint la ville. Nous avons besoin de l'aide de Spiderman et des élèves de la 5 anné de l' education primaire pour arrêter le méchant.</p>    
                        <p className={bookStyles.bookLineText20}> Il a créé una machine pour créer des monstres à partir des animaux.</p>    
                        <p className={bookStyles.bookLineText30}> Nous devons l'arrêter !</p>
                        <div className={bookStyles.layoutButton}>
                            <RessourceButton conteNum={INDEX_PAGE.SPIDERMAN_PAGE} page={2}/>
                            <NextButton page={INDEX_PAGE.SPIDERMAN_PAGE + 1} />                     
                        </div>
                    </div>
                </>
            }
        />
    )
}