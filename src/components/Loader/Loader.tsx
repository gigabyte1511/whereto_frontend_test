// import "./Loader.css"
import { FC } from 'react'
import styles from './styles.module.css'

export const Loader: FC =()=> {
  return (
    <div className={styles.lds_roller}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
