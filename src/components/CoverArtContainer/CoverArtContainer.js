import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CoverArt from '../CoverArt/CoverArt'
import styles from './style.module.css'

function CoverArtContainer({ coverArtIDMass }) {
  const navigate = useNavigate()
  const $scrollWrapper = useRef(null)
  const [indexCounter, setIndexCounter] = useState(2)

  // Scroll position setup if first render
  useEffect(() => {
    $scrollWrapper.current.scrollLeft = 1550 + 75
  }, [])

  // Change detail album component
  useEffect(() => {
    navigate('albums', { state: coverArtIDMass[indexCounter].substring(3) })
  }, [indexCounter])

  const $artMass = coverArtIDMass.map((elem) => <CoverArt id={elem} key={elem} />)

  // Change scroll position
  const scrollFnc = (e) => {
    console.log('scroll target', e.target.scrollLeft)
    if (e.target.scrollLeft === 75) {
      e.target.scrollLeft = 1550 + 75
    }
    if (e.target.scrollLeft >= 3100 + 75) {
      e.target.scrollLeft = 1550 + 75
    }
  }
  const prevAlbum = () => {
    $scrollWrapper.current.scrollLeft -= 155
    if (indexCounter <= 0) setIndexCounter(9)
    else setIndexCounter((prevVal) => prevVal - 1)
  }
  const nextAlbum = () => {
    $scrollWrapper.current.scrollLeft += 155
    if (indexCounter >= 9) setIndexCounter(0)
    else setIndexCounter((prevVal) => prevVal + 1)
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
      <button type="button" className={styles.button_prev} onClick={() => prevAlbum()}>{'<'}</button>
      <button type="button" className={styles.button_next} onClick={() => nextAlbum()}>{'>'}</button>
    </div>
  )
}

export default CoverArtContainer
