import styles from './Perfil.module.css'

export default function Perfil () {
  return (
          <>
             <div className={styles.containerPerfil}>
            <h3>Sheila Denamiel Moreno</h3>
            <img src="sheila.png" alt="sheila" width="100" height="150"/>
            <div className={styles.socialmediaContainer}>
                <p>Fac</p>
                <p>Ins</p>
                <p>Twit</p>
            </div>
          </div>
          </>
  )
}
