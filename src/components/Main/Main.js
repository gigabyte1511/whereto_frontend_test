import { useQuery } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import { getAlbumList } from '../../Api/api'
import CoverArtContainer from '../CoverArtContainer/CoverArtContainer'
import Loader from '../Loader/Loader'
import styles from './style.module.css'

export const GET_ALBUMLIST_QUERY_KEY = 'GET_ALBUMLIST_QUERY_KEY'

function Main() {
  const {
    data, isLoading, isSuccess, isError,
  } = useQuery({
    queryKey: [GET_ALBUMLIST_QUERY_KEY],
    queryFn: getAlbumList,
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
    const coverArtIDMass = data.map((elem) => elem.coverArt)
    // const $albumMass = data.map((elem) => <CoverArt id={elem.coverArt} key={elem.coverArt} />)
    return (
      <section className={styles.container}>
        <CoverArtContainer coverArtIDMass={coverArtIDMass} />
        <Outlet />
      </section>
    )
  }
}

export default Main
