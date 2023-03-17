import { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'

function AnimationTest() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>#</th>
            <th>Track</th>
          </tr>
          <tr>
            <td>1</td>
            <td>song1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>song2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>song3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>song4</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AnimationTest
