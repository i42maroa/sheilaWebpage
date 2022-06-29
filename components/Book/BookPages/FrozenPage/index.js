import { INDEX_PAGE } from "components/Book";
import Pages from "components/Book/Pages";
import RessourceButton from "components/Book/RessourceButton";
import bookStyles from '../../Book.module.css'

export default function FrozenPage ({ }) {
    return (   
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Les pièces de mon château</p>
                    </div>
                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            Frozen a besoin d'un colocataire parce qu'elle se sent seule et en plus, elle veut partager les énormes dépenses de son château.
                            On va láider à trouver quelqu'un de responsable et propre.
                        </p> 
                        <p className={bookStyles.bookLineText30}>Pouvez-vous l'aider ?</p>         
                        </div>
                    <div className={bookStyles.layoutButton}>
                        <RessourceButton conteNum={INDEX_PAGE.FROZEN_PAGE} page={1}/>
                    </div>
                </>    
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Noël sans glace</p>                        
                    </div>
                    <div className={bookStyles.layoutTextContainer}>
                        <p className={bookStyles.bookLineText20}>
                            <img className={bookStyles.floatRight} src="../bookImages/frozen.png" height={200}/>
                            Frozen est très inquiète. Son château de glace est en train de fondre à cause du réchauffement climatique. 
                            Nous devons láider! Pour cela, nous allons apprendre à recycler pour Noël, mais aussi pour toute l'année.
                        </p>
                    </div>       
                   
                    <div className={bookStyles.layoutButton}>
                        <RessourceButton conteNum={INDEX_PAGE.FROZEN_PAGE} page={2}/>                      
                    </div>
                </>
            }
            backButton={INDEX_PAGE.SECOND_PAGE}
            nextButton={INDEX_PAGE.FROZEN_PAGE + 1}
        />
    )
}