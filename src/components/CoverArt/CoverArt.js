import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

export const GET_ALBUMLIST_QUERY_KEY = 'GET_ALBUMLIST_QUERY_KEY'

function CoverArt({ id }) {
  const navigate = useNavigate()
  const albumID = id.substring(3)
  // const {
  //   data, isLoading, isSuccess, isError,
  // } = useQuery({
  //   queryKey: [GET_ALBUMLIST_QUERY_KEY],
  //   queryFn: getAlbumList,
  // })

  // if (isLoading) {
  //   return (
  //     <div className={styles.container}>
  //       <Loader />
  //     </div>
  //   )
  // }
  // if (isError) {
  //   return (
  //     <div className={styles.container}>
  //       error
  //     </div>
  //   )
  // }
  // if (isSuccess) {
  //   console.log(data)
  //   const $albumMass = data.map((elem) => <CoverArt id={elem.coverArt} key={elem.coverArt} />)
  //   return (
  //     <section className={styles.container}>
  //       <div className={styles.cover_art_container}>
  //         {/* <CoverArt />
  //         <CoverArt />
  //         <CoverArt /> */}
  //         {$albumMass}
  //       </div>
  //     </section>
  //   )
  // }
  return (
    <button type="button" className={styles.container} onClick={() => navigate('albums', { state: albumID })}>
      <img src={`http://demo.subsonic.org/rest/getCoverArt?u=guest&p=guest&v=1.12.0&c=myapp&id=${id}`} alt="img" />
    </button>
  )
}

export default CoverArt
