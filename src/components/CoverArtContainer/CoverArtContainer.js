import CoverArt from '../CoverArt/CoverArt'
import styles from './style.module.css'

function CoverArtContainer({ coverArtIDMass }) {
  const $artMass = coverArtIDMass.map((elem) => <CoverArt id={elem} key={elem} />)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_scrollable}>
        <div className={styles.cover_art_container}>
          {$artMass}
        </div>
      </div>
    </div>
  )
}

export default CoverArtContainer
