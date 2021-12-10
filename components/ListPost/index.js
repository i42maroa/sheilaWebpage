import Post from 'components/Post'
import styles from './ListPost.module.css'

export default function ListPost ({ title }) {
  return (
            <>
                <h2>{title}</h2>
                <div className={styles.listPostContainer}>
                    <Post title="First resource" src="resource.png" description="Es el mejor recurso porque se lo hemos robado a frances hasta en la sopa"></Post>
                    <Post title="Second resource" src="resource2.png" description="Me encanta robar" ></Post>
                </div>
            </>
  )
}
