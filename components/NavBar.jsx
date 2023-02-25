import React from 'react'
import styles from './NavBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.main}>
      <div className={styles.textrow}>
        <Link href='/' className={currentRoute === '/' ? styles.active : styles.a}><h5 className={styles.title}>Home</h5></Link>
        {/* // create props for the NavBar component for navigating to different pages */}
        <Link className={styles.a} href="https://blog.danieltolentino.omg.lol"><h5 className={styles.title}>Blog</h5></Link>
        <Link className={currentRoute === '/projects' ? styles.active : styles.a} href="/projects"><h5 className={styles.title}>Projects</h5></Link>
        <Link className={currentRoute === '/about' ? styles.active : styles.a} href="/about"><h5 className={styles.title}>About</h5></Link>
        </div>
    </div>
  )
}