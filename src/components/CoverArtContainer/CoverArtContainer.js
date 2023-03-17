import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CoverArt from '../CoverArt/CoverArt'
import styles from './style.module.css'

function CoverArtContainer({ coverArtIDMass }) {
  const navigate = useNavigate()
  const $scrollWrapper = useRef(null)
  const $buttonPrev = useRef(null)
  const $buttonNext = useRef(null)

  const [indexCounter, setIndexCounter] = useState(2)
  const [scrollCounter, setScrollCounter] = useState(1550 + 75)

  useEffect(() => {
    // Prevention of frequent button presses
    $buttonNext.current.disabled = true
    $buttonPrev.current.disabled = true
    setTimeout(() => {
      $buttonNext.current.disabled = false
      $buttonPrev.current.disabled = false
    }, 400)
    $scrollWrapper.current.scrollLeft = scrollCounter
    $scrollWrapper.current.style.scrollBehavior = 'smooth'
  }, [scrollCounter])

  // Load album info
  useEffect(() => {
    navigate('albums', { state: coverArtIDMass[indexCounter].substring(3) })
  }, [indexCounter])

  const $artMass = coverArtIDMass.map((elem) => <CoverArt id={elem} key={elem} />)

  // Card carousel loop emulation mechanism
  const scrollFnc = (e) => {
    console.log('scroll target', e.target.scrollLeft)
    if (e.target.scrollLeft === 75) {
      $scrollWrapper.current.style.scrollBehavior = 'auto'
      setScrollCounter(1550 + 75)
    }
    if (e.target.scrollLeft >= 3100 + 75) {
      $scrollWrapper.current.style.scrollBehavior = 'auto'
      setScrollCounter(1550 + 75)
    }
  }
  // Change album info
  const prevAlbum = () => {
    setScrollCounter((prevScrollVal) => prevScrollVal - 155)
    if (indexCounter <= 0) setIndexCounter(9)
    else setIndexCounter((prevVal) => prevVal - 1)
  }
  const nextAlbum = () => {
    setScrollCounter((prevScrollVal) => prevScrollVal + 155)
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
      <button ref={$buttonPrev} type="button" className={styles.button_prev} onClick={() => prevAlbum()}>{'<'}</button>
      <button ref={$buttonNext} type="button" className={styles.button_next} onClick={() => nextAlbum()}>{'>'}</button>
      <div className={styles.left_mask} />
      <div className={styles.right_mask} />
    </div>
  )
}

export default CoverArtContainer
