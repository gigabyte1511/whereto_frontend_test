import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { getAlbumById } from '../../Api/api'
import styles from './style.module.css'

import Loader from '../Loader/Loader'

export const GET_ALBUM_BY_ID_QUERY_KEY = 'GET_ALBUM_BY_ID_QUERY_KEY'

function AlbumDetail() {
  const { state: albumID } = useLocation()
  const {
    data, isLoading, isSuccess, isError,
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
        error
      </div>
    )
  }
  if (isSuccess) {
    console.log(data)

    const $songsMass = data.song.map((song, index) => (
      <tr>
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
        <table
          className={styles.table}
        >
          <caption>Album track list</caption>
          <tbody>
            {/* <tr>
            <th>Россия</th>
            <th>Великобритания</th>
            <th>Европа</th>
            <th>Длина ступни, см</th>
            </tr>
            <tr>
            <td>34,5</td>
            <td>3,5</td>
            <td>36</td>
            <td>23</td>
            </tr>
            <tr>
            <td>35,5</td>
            <td>4</td>
            <td>36⅔</td>
            <td>23–23,5</td>
          </tr> */}
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
  return (
    <div>AlbumDetail</div>
  )
}

export default AlbumDetail
