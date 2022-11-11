import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Link href="/">360 INNOVATION</Link>
      <ul className={styles.list}>
        <li className={styles.listItems}>
          <Link href="/products/design">Design</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/development">Development</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/production">Production</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/photography">Photography</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul onClick={() =>setOpen(false)} className={styles.menu} style={{right: open ? "0px" : "-50vw"}}>
        <li className={styles.menuItems}>
          <Link href="/products/design">Design</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/products/development">Development</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/products/production">Production</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/products/photography">Photography</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar