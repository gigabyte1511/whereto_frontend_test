import styles from './style.module.css'

function AlbumDetailSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.albumInfo}>
        <div className={styles.img_container}>
          <img src="https://www.publicdomainpictures.net/pictures/300000/nahled/vinyl-record.png" alt="img" />
        </div>
        <div className={styles.album_name}>{}</div>
        <div className={styles.album_author}>{}</div>
      </div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th width="25">#</th>
            <th>Track</th>
          </tr>
          <tr>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AlbumDetailSkeleton
