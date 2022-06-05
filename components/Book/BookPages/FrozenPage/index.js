import { INDEX_PAGE } from "components/Book";
import BackButton from "components/Book/BackButton";
import NextButton from "components/Book/NextButton";
import Pages from "components/Book/Pages";
import RessourceButton from "components/Book/RessourceButton";
import bookStyles from '../../Book.module.css'

export default function FrozenPage ({ setPageBook }) {
    return (   
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Les pièces de mon château</p>
                        <p className={bookStyles.bookLineText20}>Frozen a besoin d'un colocataire parce qu'elle se sent seule et en plus, elle veut partager les énormes dépenses de son château.</p> 
                        <p className={bookStyles.bookLineText20}>On va láider à trouver quelqu'un de responsable et propre.</p> 
                        <p className={bookStyles.bookLineText30}>Pouvez-vous l'aider ?</p>
                        <div className={bookStyles.layoutButton}>
                            <BackButton setPageBook={setPageBook} page={INDEX_PAGE.SECOND_PAGE}/>
                            <RessourceButton conteNum={INDEX_PAGE.FROZEN_PAGE} page={1}/>
                        </div>
                    </div>
                </>    
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Noël sans glace</p>
                    </div>

                    <div className={bookStyles.layoutMiddleColumns}>                           
                        <p className={bookStyles.bookLineText20}>Frozen est très inquiète. Son château de glace est en train de fondre à cause du réchauffement climatique.</p>    
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <div className={bookStyles.imgContainer}>
                            <img src="bookImages/frozen.png" height={200}></img>
                        </div>               
                    </div> 
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText20}>Nous devons láider! Pour cela, nous allons apprendre à recycler pour Noël, mais aussi pour toute l'année.</p>
                        <div className={bookStyles.layoutButton}>
                            <RessourceButton conteNum={INDEX_PAGE.FROZEN_PAGE} page={2}/>
                            <NextButton setPageBook={setPageBook} page={INDEX_PAGE.FROZEN_PAGE  + 1} />                         
                        </div>
                    </div>
                </>
            }
        />
    )
}