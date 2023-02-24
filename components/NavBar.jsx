import React from 'react'
import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className={styles.main}>
      <div className={styles.textrow}>
        <Link className={styles.link} href="/"><h5 className={styles.title}>Home</h5></Link>
        {/* // create props for the NavBar component for navigating to different pages */}
        <Link className={styles.link} href="https://blog.danieltolentino.omg.lol"><h5 className={styles.title}>Blog</h5></Link>
        <Link className={styles.link} href="/projects"><h5 className={styles.title}>Projects</h5></Link>
        <h5 className={styles.title}>Contact</h5>
        <Link className={styles.link} href="/about"><h5 className={styles.title}>About</h5></Link>
        </div>
    </div>
  )
}