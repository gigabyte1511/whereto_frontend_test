import { useEffect, useRef } from 'react'
import CoverArt from '../CoverArt/CoverArt'
import styles from './style.module.css'

function CoverArtContainer({ coverArtIDMass }) {
  const $scrollWrapper = useRef(null)

  useEffect(() => {
    $scrollWrapper.current.scrollLeft = 1550 + 75
  })

  const $artMass = coverArtIDMass.map((elem) => <CoverArt id={elem} key={elem} />)
  const scrollFnc = (e) => {
    console.log('scroll target', e.target.scrollLeft)
    if (e.target.scrollLeft === 75) {
      e.target.scrollLeft = 1550 + 75
    }
    if (e.target.scrollLeft >= 3100 + 75) {
      e.target.scrollLeft = 1550 + 75
    }
  }
  const prev = () => {
    $scrollWrapper.current.scrollLeft -= 155
  }
  const next = () => {
    $scrollWrapper.current.scrollLeft += 155
  }
  return (
    <div className={styles.container}>
      <div
        ref={$scrollWrapper}
        className={styles.wrapper_scrollable}
        onScroll={(e) => scrollFnc(e)}
      >
        <div className={styles.cover_art_container}>
          {[$artMass, $artMass, $artMass]}
        </div>
      </div>
      <button type="button" className={styles.button_prev} onClick={() => prev()}>{'<'}</button>
      <button type="button" className={styles.button_next} onClick={() => next()}>{'>'}</button>
    </div>
  )
}

export default CoverArtContainer
