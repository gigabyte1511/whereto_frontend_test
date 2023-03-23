import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

export const GET_ALBUMLIST_QUERY_KEY = 'GET_ALBUMLIST_QUERY_KEY'

type CoverArtProps = {
  id: string
}

const CoverArt: FC<CoverArtProps> = ({ id }) => {
  const navigate = useNavigate()
  const albumID = id.substring(3)
  return (
    <button type="button" className={styles.container} onClick={() => navigate('albums', { state: albumID })}>
      <img src={`http://demo.subsonic.org/rest/getCoverArt?u=guest&p=guest&v=1.12.0&c=myapp&id=${id}`} alt="img" />
    </button>
  )
}

export default CoverArt
