import MoiButton from 'components/MoiCard/Button'
import Pages from 'components/Book/Pages'
import bookStyles from '../../Book.module.css'

export default function MoiPage () {
  return (
        <Pages
            leftPage={
                <>
                <img src="./sheila-portada-final.svg"/>
                </>
            }
            rightPage={
                <>
                    <div className={bookStyles.layoutSingleColumn}>
                        <p className={bookStyles.bookLineText30}>Soy yo</p>
                    </div>

                    <div className={bookStyles.layoutButton}>
                            <MoiButton className={bookStyles.buttonContainer} />
                    </div>

                </>
            }
        />
  )
}
