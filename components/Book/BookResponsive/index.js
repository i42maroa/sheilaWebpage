import BlancanievesPage from '../BookPages/BlancanievesPage'
import CaperucitaPage from '../BookPages/CaperucitaPage'
import FirstBookPage from '../BookPages/FirstBookPage'
import FrozenPage from '../BookPages/FrozenPage'
import RatatouillePage from '../BookPages/RatatouillePage'
import SecondBookPage from '../BookPages/SecondBookPage'
import ShreilakPage from '../BookPages/ShreilakPage'
import SpiderManPage from '../BookPages/SpidermanPage'
import styles from './ResponsiveBook.module.css'


export default function BookResponsive () {
    return (
            <>
                <div className={styles.containerPages}>
                    <section id="section_1"><FirstBookPage/></section>
                    <section id="section_2"><SecondBookPage/></section>
                    <section id="section_3"><SpiderManPage/></section>
                    <section id="section_4"><FrozenPage/></section>
                    <section id="section_5"><RatatouillePage/></section>
                    <section id="section_6"><CaperucitaPage/></section>
                    <section id="section_7"><BlancanievesPage/></section>
                    <section id="section_8"><ShreilakPage/></section>             
                </div>
            </>
  )
}
