import AdminLayout from 'layouts/AdminLayout'
import styles from 'styles/Admin.module.css'

export default function Admin () {
  return (
      <div className={styles.container}>
        <AdminLayout>

          <div>
            <h1 className={styles.title}>Create new post</h1>
          </div>

          </AdminLayout>
      </div>
  )
}
