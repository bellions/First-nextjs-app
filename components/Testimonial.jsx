import React from 'react'
import Image from "next/image"
import styles from "../styles/Testimonial.module.css"
import Circle from './Circle'
import { users } from "../data"

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor='darkblue' top="-70vh" left="0" right="0" margin="auto" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map(user => (
          <div key={user.id} className={styles.card}>
            <Image src={`/assets/${user.logo}`} width='30' height='30' alt='' />
            <p className={styles.comment}>
              {user.comment}
            </p>
            <div className={styles.person}>
              <Image className={styles.avatar} src={`/assets/${user.avatar}`} width="45" height='45' objectFit="cover" alt="" />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>

              </div>
        ))}
            </div>
          </div>
        )
}

        export default Testimonial;