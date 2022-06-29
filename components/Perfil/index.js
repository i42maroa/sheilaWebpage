import styles from './Perfil.module.css'

export default function Perfil () {
  return (
          <>
             <div className={styles.containerPerfil}>
             <p className={styles.text}>Bonjour ! Je m&apos;appelle SHEILA!</p>
            <img src="sheila.png" alt="sheila" width="100" height="150"/>
            <p className={styles.text}>Quiero daros la bienvenida a mi blog. En el encontraréis una variedad de recursos para que no os falten nunca a la hora de dar clase</p>

            <div className={styles.socialmediaContainer}>
                <h4>Fac</h4>
                <h4>Ins</h4>
                <h4>Twit</h4>
            </div>
          </div>
          </>
  )
}
