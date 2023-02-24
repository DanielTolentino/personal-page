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
              <div className={styles.img_container}>
              <Image 
               className={styles.img} 
               src={props.image} 
               alt={props.alt}  
               width={100} 
               height={100} 
               quality="100"
               blurDataURL="data:..."
               placeholder="blur"/>
              </div>
            </div>
            </Link>
        </div>
    </div>
  )
}