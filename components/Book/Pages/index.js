
import BackButton from '../BackButton'
import bookStyles from '../Book.module.css'
import NextButton from '../NextButton'

export default function Pages ({ leftPage, rightPage, backButton, nextButton}) {
    return ( 
        <>
            <div className={bookStyles.bookPage}>           
                <div className={bookStyles.layoutButtonPage}> 
                    { backButton && <BackButton page={backButton}/> }
                </div>  
                <div className={bookStyles.layoutLeftPage}> 
                    {leftPage}
                </div>
            </div>
            <div className={bookStyles.bookPage}>
                <div className={bookStyles.layoutRightPage}>
                    {rightPage}
                </div>
                <div className={bookStyles.layoutButtonPage}> 
                    { nextButton && <NextButton page={nextButton}/> }
                </div> 
            </div>
        </>
    )
}