import styles from './style.module.css'

function Header() {
  return (
    <header className={styles.container}>
      <img src="http://www.subsonic.org/pages/inc/img/subsonic_logo.png" alt="" />
      <h1>Subsonic test api page</h1>
    </header>
  )
}

export default Header
