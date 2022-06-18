import { INDEX_PAGE } from "components/Book";
import BackButton from "components/Book/BackButton";
import NextButton from "components/Book/NextButton";
import Pages from "components/Book/Pages";
import RessourceButton from "components/Book/RessourceButton";

import bookStyles from '../../Book.module.css'

export default function BlancanievesPage ({ }) {
    return (   
        <Pages
            leftPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Blanche-Neige et les 7 géants</p>                                   
                        <p className={bookStyles.bookLineText20}>Blanche-Neige a trouvé une maison avec sept géants, ils sont très maladroits et ils heurtent contre les murs.</p>                       
                        <p className={bookStyles.bookLineText20}>Ils sont très machistes et grognons, mais ils sont sous le sortilège d'une sorcière puisqu'ils étaient des mains.</p>    
                        <p className={bookStyles.bookLineText20}>Essaie de démontrer aux géants que tout travail peut être fait par une femme.</p>    
                        <div className={bookStyles.layoutButton}>
                            <BackButton  page={INDEX_PAGE.SECOND_PAGE}/>
                            <RessourceButton conteNum={INDEX_PAGE.BLANCANIEVES_PAGE} page={1}/>
                        </div>
                    </div> 
                </>    
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Elle porte un survêtement</p>    
                    </div> 

                    <div className={bookStyles.layoutMiddleColumns}>                           
                        <p className={bookStyles.bookLineText20}>Blanche-Neige est fatiguée de porter toujours des robes et des talons.</p>    
                    </div>
                    <div className={bookStyles.layoutMiddleColumns}>
                        <div className={bookStyles.imgContainer}>
                            <img src="../bookImages/ratatouille.png" height={200}></img>
                        </div>               
                    </div> 

                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText20}>Elle veut un style plus décontracté, pourquoi pas de jeans ?</p>
                        <p className={bookStyles.bookLineText20}>Aidez-la à acheter des vêtements dans le magasin pour son quotidien.</p>
                        <div className={bookStyles.layoutButton}>
                            <RessourceButton conteNum={INDEX_PAGE.BLANCANIEVES_PAGE} page={2}/>
                            <NextButton page={INDEX_PAGE.BLANCANIEVES_PAGE + 1} />            
                        </div>
                    </div> 
                </>
            }
        />
    )
}