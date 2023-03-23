import { FC } from 'react'
import styles from './style.module.css'

const Footer: FC =()=> {
  return (
    <footer className={styles.container}>
      <img src="http://www.subsonic.org/pages/inc/img/footer.jpg" alt="" />
    </footer>
  )
}

export default Footer
