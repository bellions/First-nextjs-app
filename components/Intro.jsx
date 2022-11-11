import React from 'react'
import Image from 'next/image'
import styles from "../styles/Intro.module.css"
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" left="-50vh" />
      <Circle backgroundColor="#0F9313" right="-40vh" />
        <div className={styles.card}>
            <h1 className={styles.title}><span className={styles.brand}>360 INNOVATION</span> Digital product agency</h1>
            <p className={styles.desc}>Let's make your beauty shine like a diamond by taking beautiuful picture with us.</p>
            <button className={styles.button}>Discover</button>
        </div>
        <div className={styles.card}>
            <Image 
            src="/assets/Avocado.png" 
            width= '600'
            height="600" 
            alt=''
            className={styles.heroImg}
            />
        </div>
    </div>
  )
}

export default Intro