import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import {
  FC,
  useCallback,
  useEffect, useMemo, useRef, useState,
} from 'react'
import { getAlbumById } from '../../Api/api'
import styles from './style.module.css'
import AlbumDetailSkeleton from '../AlbumDetailSkeleton/AlbumDetailSkeleton'

export const GET_ALBUM_BY_ID_QUERY_KEY = 'GET_ALBUM_BY_ID_QUERY_KEY'

const AlbumDetail:FC = ()=> {
  // const [isShow, setIsShow] = useState(false)
  const { state: albumID } = useLocation()
  const {
    data, error, isLoading, isSuccess, isError,
  }= useQuery({
    queryKey: [GET_ALBUM_BY_ID_QUERY_KEY, albumID],
    queryFn: getAlbumById,
  })

  // useEffect(() => {
  //   setTimeout(() => { setIsShow(true) }, 500)
  //   console.log(albumID)
  //   return () => setIsShow(false)
  // }, [albumID])

  if (isLoading) {
    return (
      <AlbumDetailSkeleton />
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
    const $songsMass = data.song.map((song:{id:string, title:string}, index:number) => (
      <tr key={song.id}>
        <td>{index + 1}</td>
        <td>{song.title}</td>
      </tr>
    ))
    return (
      // <div
      //   className={`${styles.container} ${((isShow) ? styles.show : '')}`}
      //   style={(isShow) ? {} : { transitionProperty: 'none' }}
      // >
      <div className={styles.container}>
        <div className={styles.albumInfo}>
          <img src={`http://demo.subsonic.org/rest/getCoverArt?u=guest&p=guest&v=1.12.0&c=myapp&id=al-${albumID}`} alt="img" />
          <h1>{data.name}</h1>
          <h2>{data.artist}</h2>
        </div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th width="25">#</th>
              <th>Track</th>
            </tr>
            {$songsMass}
          </tbody>
        </table>
      </div>
    )
  }
  return <></>
}

export default AlbumDetail
