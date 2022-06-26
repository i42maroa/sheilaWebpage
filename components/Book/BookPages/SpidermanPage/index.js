import { INDEX_PAGE } from "components/Book";
import Pages from "components/Book/Pages";
import RessourceButton from "components/Book/RessourceButton";

import bookStyles from '../../Book.module.css'

export default function SpiderManPage ({ }) {
    return (   
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>La Routine de Peter</p>
                    </div>
                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}> 
                            <img src="../bookImages/spiderMan_1.png" className={bookStyles.floatRight} height={180}/>
                            Peter Parker a une vie très stressante.  
                            Il va à l'université, mais il doit aussi aller sauver le monde quand les gens en ont besoin.
                            Nous devons l'aider à mener une vie plus calme.
                        </p>    
                    </div>             
                 
                    <div className={bookStyles.layoutButton}>
                        <RessourceButton conteNum={INDEX_PAGE.SPIDERMAN_PAGE} page={1}/>
                    </div>
                </>    
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Une machine de monstres</p>    
                    </div>  
                    <div className={bookStyles.layoutTextContainer}>        
                        <p className={bookStyles.bookLineText20}> 
                            La peur atteint la ville. Nous avons besoin de l'aide de Spiderman et des élèves de la 5 anné de l' education primaire pour arrêter le méchant.
                            Il a créé una machine pour créer des monstres à partir des animaux.
                        </p>    
                        <p className={bookStyles.bookLineText30}> Nous devons l'arrêter !</p>   
                    </div>
                    <div className={bookStyles.layoutButton}>
                            <RessourceButton conteNum={INDEX_PAGE.SPIDERMAN_PAGE} page={2}/>                   
                    </div>
                </>
            }
            backButton={INDEX_PAGE.SECOND_PAGE}
            nextButton={INDEX_PAGE.SPIDERMAN_PAGE + 1}
        />
    )
}