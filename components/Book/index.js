import FirstBookPage from "components/Book/BookPages/FirstBookPage";
import BookSVG from "components/SVG/book";
import styles from './Book.module.css'
import SecondBookPage from "components/Book/BookPages/SecondBookPage";
import SpiderManPage from "./BookPages/SpidermanPage";
import ShreilakPage from "./BookPages/ShreilakPage";
import FrozenPage from "./BookPages/FrozenPage";
import RatatouillePage from "./BookPages/RatatouillePage";
import CaperucitaPage from "./BookPages/CaperucitaPage";
import BlancanievesPage from "./BookPages/BlancanievesPage";

export const INDEX_PAGE ={
    FIRST_PAGE: 1,
    SECOND_PAGE: 2,
    SPIDERMAN_PAGE: 3,
    FROZEN_PAGE:4,
    RATATOUILLE_PAGE:5,
    CAPERUCITA_PAGE:6,
    BLANCANIEVES_PAGE:7,
    SHREILAK_PAGE:8,
  }

export default function Book ({ numPage }) {
    const page = parseInt(numPage)
    return (
        <div className={styles.container}>
            <BookSVG className={styles.bookSvg} />
            <div className={styles.layoutBookPages}>         
                    { page === INDEX_PAGE.FIRST_PAGE && <FirstBookPage/>}
                    { page === INDEX_PAGE.SECOND_PAGE && <SecondBookPage/>}    
                    { page === INDEX_PAGE.SPIDERMAN_PAGE && <SpiderManPage/>}
                    { page === INDEX_PAGE.FROZEN_PAGE && <FrozenPage/>}
                    { page === INDEX_PAGE.RATATOUILLE_PAGE && <RatatouillePage/>}
                    { page === INDEX_PAGE.CAPERUCITA_PAGE && <CaperucitaPage/>}
                    { page === INDEX_PAGE.BLANCANIEVES_PAGE && <BlancanievesPage/>}
                    { page === INDEX_PAGE.SHREILAK_PAGE && <ShreilakPage/>}
            </div>
        </div>
    )
}