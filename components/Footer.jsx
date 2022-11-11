import React from 'react'
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>360 INNOVATION.</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref="">
          <span className={styles.linkText}>WORK WITH US</span>
          <Image src="/assets/link.png" width="40" height="40" alt="" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
            12 Adams street NY <br /> USA
        </div>
        <div className={styles.cardItem}>
            Contact@DIMAZONNIGERIA.COM <br /> +2348146969499
        </div>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          @ 2022 360 INNOVATIVE COMPANY.
          <br /> 
          ALL RIGHTS RESERVED 
        </div>
      </div>
    </div>
  )
}

export default Footer;