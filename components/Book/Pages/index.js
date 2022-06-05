
import bookStyles from '../Book.module.css'

export default function Pages ({ leftPage, rightPage}) {
    return ( 
        <>
            <div className={bookStyles.bookPage}>
                <div className={bookStyles.layoutLeftPage}> 
                    {leftPage}
                </div>
            </div>
            <div className={bookStyles.bookPage}>
                <div className={bookStyles.layoutRightPage}>
                    {rightPage}
                </div>
            </div>
        </>
    )
}