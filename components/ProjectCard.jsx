import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ProjectCard.module.css'

export default function Card(props) {
  return (
    <div className='cards'>
        <div className='card-container'>
        <Link className={styles.link} href={props.url}>
        {props.linkTitle}
            <div className={styles.card}>
              <h3 className={styles.h3}>{props.title}</h3>
              <p className={styles.p}>{props.description}</p>
              
              <Image className={styles.img} src={props.image} alt={props.alt}  width={400} height={400} />
            
            </div>
            </Link>
        </div>
    </div>
  )
}