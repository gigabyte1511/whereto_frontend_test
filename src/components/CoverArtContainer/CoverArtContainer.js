import CoverArt from '../CoverArt/CoverArt'
import styles from './style.module.css'

function CoverArtContainer({ coverArtIDMass }) {
  const $artMass = coverArtIDMass.map((elem) => <CoverArt id={elem} key={elem} />)
  const scrollFnc = (e) => {
    console.log('scroll target', e.target.scrollLeft)
    if (e.target.scrollLeft === 0) {
      e.target.scrollLeft = 1540
    }
    if (e.target.scrollLeft >= 3098) {
      e.target.scrollLeft = 1540
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_scrollable} onScroll={(e) => scrollFnc(e)}>
        <div className={styles.cover_art_container}>
          {[$artMass, $artMass, $artMass]}
        </div>
      </div>
      {/* <button type="button">{'<'}</button>
      <button type="button">{'>'}</button> */}
    </div>
  )
}

export default CoverArtContainer
