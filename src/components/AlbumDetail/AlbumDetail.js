import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { getAlbumById } from '../../Api/api'
import styles from './style.module.css'

import Loader from '../Loader/Loader'

export const GET_ALBUM_BY_ID_QUERY_KEY = 'GET_ALBUM_BY_ID_QUERY_KEY'

function AlbumDetail() {
  const { state: albumID } = useLocation()
  const {
    data, error, isLoading, isSuccess, isError,
  } = useQuery({
    queryKey: [GET_ALBUM_BY_ID_QUERY_KEY, albumID],
    queryFn: getAlbumById,
  })

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    )
  }
  if (isError) {
    return (
      <div className={styles.container}>
        {`Error: ${error}`}
      </div>
    )
  }
  if (isSuccess) {
    const $songsMass = data.song.map((song, index) => (
      <tr key={song.id}>
        <td>{index + 1}</td>
        <td>{song.title}</td>
      </tr>
    ))
    return (
      <div className={styles.container}>
        <div className={styles.albumInfo}>
          <img src={`http://demo.subsonic.org/rest/getCoverArt?u=guest&p=guest&v=1.12.0&c=myapp&id=al-${albumID}`} alt="img" />
          <h1>{data.name}</h1>
          <h2>{data.artist}</h2>
        </div>
        <table className={styles.table}>
          <caption>Album track list</caption>
          <tbody>
            <tr>
              <th>#</th>
              <th>Track</th>
            </tr>
            {$songsMass}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AlbumDetail
