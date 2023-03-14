import { useState } from 'react'
import CoverArt from '../CoverArt/CoverArt'
import styles from './style.module.css'

let counter = 930
function CoverArtContainer({ coverArtIDMass }) {
  const $artMass = coverArtIDMass.map((elem) => <CoverArt id={elem} key={elem} />)
  console.log('Render-------------------------', $artMass)
  const [artsPages, useArtsPages] = useState([$artMass, $artMass, $artMass])
  const scrollFnc = (e) => {
    console.log(
      'Target',
      e.target.scrollLeft,
    )
    if (e.target.scrollLeft === 0) {
      // useArtsPages((prevValue) => [$artMass, ...prevValue])
      e.target.scrollLeft = 1540
    }
    if (e.target.scrollLeft >= 3098) {
      e.target.scrollLeft = 1545
    }
    if (e.target.scrollLeft >= counter) {
      counter += 845
      // useArtsPages((prevValue) => [...prevValue, $artMass])
    }
    console.log('Counter', counter)
    console.log(artsPages)
  }
  return (
    <div className={styles.container}>
      <div id="section-1" className={styles.wrapper_scrollable} onScroll={(e) => scrollFnc(e)}>
        <div className={styles.cover_art_container}>
          {artsPages}
        </div>
      </div>
    </div>
  )
}

export default CoverArtContainer
