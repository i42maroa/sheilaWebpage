import { INDEX_PAGE } from "components/Book";
import BackButton from "components/Book/BackButton";
import NextButton from "components/Book/NextButton";
import Pages from "components/Book/Pages";
import RessourceButton from "components/Book/RessourceButton";
import bookStyles from '../../Book.module.css'

export default function CaperucitaPage ({ }) {
    return (   
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Elle s'est perdue !</p>
                        <p className={bookStyles.bookLineText20}>Le petit chaperon rouge marchait en regardant son téléphone portable et elle s'est perdue dans la ville de sa grand-mère.</p>
                        <p className={bookStyles.bookLineText20}>Elle a demandé de l'aide à un homme, et il était le loup déguisé en humain.</p>
                        <p className={bookStyles.bookLineText20}>Maintenant, Petit Chaperon Rouge est kidnappé, pour savoir où elle est et pouvoir ainsi la délivrer, nous devons travailller l'orientation et la ville.</p>
                        <div className={bookStyles.layoutButton}>
                            <BackButton className={bookStyles.buttonContainer} page={INDEX_PAGE.SECOND_PAGE}/>
                            <RessourceButton className={bookStyles.buttonContainer} conteNum={INDEX_PAGE.CAPERUCITA_PAGE} page={1}/>
                        </div>
                    </div>
                </>    
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Mamie est malade</p>
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>                           
                        <p className={bookStyles.bookLineText20}>Nous allons aider grand-mère à faire une blague au Petit Chaperon Rougue, puisque nous sommes dans le 1º avril.</p>    
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <div className={bookStyles.imgContainer}>
                            <img src="../bookImages/caperucita.png" height={200}></img>
                        </div>               
                    </div> 
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText20}>Mamie dit que sa main fait mal, puis la jambe, puis un doigt... et tout le corps !</p>                    
                        <div className={bookStyles.layoutButton}>
                            <RessourceButton className={bookStyles.buttonContainer} conteNum={INDEX_PAGE.CAPERUCITA_PAGE} page={2}/>
                            <NextButton className={bookStyles.buttonContainer} page={INDEX_PAGE.CAPERUCITA_PAGE + 1} />                          
                        </div>                   
                    </div>
                </>
            }
        />
    )
}