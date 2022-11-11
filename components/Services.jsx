import Link from 'next/link'
import React from 'react'
import styles from '../styles/Services.module.css'
import Image from 'next/image'

const Services = ({services}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>What can we do?</h1>
        <h1 className={styles.subtitle}>Services we can help you with</h1>

        <div className={styles.services}>
            {services.map((service ) => (
                <Link key={service.id} href={`/products/${service.name}`} passHref>
                    <div className={styles.service}>
                        <span className={styles.cat}>{service.title}</span>
                        <div className={styles.media}>
                         {service.video ? (
                            <video src={`/assets/${service.video}`} autoPlay loop className={styles.video} />
                         ) : (
                            <Image src={`/assets/${service.photo}`} width='300' height='300' alt="" />
                         )}   
                        </div>
                    </div>
                </Link>
            )
            )}
        </div>
    </div>
  )
}

export default Services