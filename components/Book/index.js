import FirstBookPage from "components/Book/BookPages/FirstBookPage";
import BookSVG from "components/SVG/book";
import styles from './Book.module.css'
import { useState } from 'react/cjs/react.development'
import SecondBookPage from "components/Book/BookPages/SecondBookPage";
import SpiderManPage from "./BookPages/SpidermanPage";
import ShreilakPage from "./BookPages/ShreilakPage";
import FrozenPage from "./BookPages/FrozenPage";
import RatatouillePage from "./BookPages/RatatouillePage";
import CaperucitaPage from "./BookPages/CaperucitaPage";
import BlancanievesPage from "./BookPages/BlancanievesPage";

export const INDEX_PAGE ={
    FIRST_PAGE: 0,
    SECOND_PAGE: 1,
    SPIDERMAN_PAGE: 2,
    FROZEN_PAGE:3,
    RATATOUILLE_PAGE:4,
    CAPERUCITA_PAGE:5,
    BLANCANIEVES_PAGE:6,
    SHREILAK_PAGE:7,
  }

export default function Book ({  }) {
    const [page, setPageBook] = useState(0); 

    return (
        <div className={styles.container}>
            <BookSVG className={styles.bookSvg} />
            <div className={styles.layoutBookPages}>            
                    { page === INDEX_PAGE.FIRST_PAGE && <FirstBookPage setPageBook={setPageBook} />}
                    { page === INDEX_PAGE.SECOND_PAGE && <SecondBookPage setPageBook={setPageBook}/>}    
                    { page === INDEX_PAGE.SPIDERMAN_PAGE && <SpiderManPage setPageBook={setPageBook} />}
                    { page === INDEX_PAGE.FROZEN_PAGE && <FrozenPage setPageBook={setPageBook} />}
                    { page === INDEX_PAGE.RATATOUILLE_PAGE && <RatatouillePage setPageBook={setPageBook} />}
                    { page === INDEX_PAGE.CAPERUCITA_PAGE && <CaperucitaPage setPageBook={setPageBook} />}
                    { page === INDEX_PAGE.BLANCANIEVES_PAGE && <BlancanievesPage setPageBook={setPageBook} />}
                    { page === INDEX_PAGE.SHREILAK_PAGE && <ShreilakPage setPageBook={setPageBook}/>}
            </div>
        </div>
    )
}