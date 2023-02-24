import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Card from '../components/ProjectCard';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
      <img src="/foto_de_perfil.webp" alt="profile pic" className={styles.pfp} />
      <div>
        <NavBar/>
        <div>          
          <div>
            <h1 className={styles.title}>Olá <span class="emoji"> 👋 </span>, meu nome é Daniel Tolentino </h1>
            <br />
            <div className={styles.links_row}>
              <div className={styles.link_card}>
                <a  className={styles.link}                href="https://github.com/DanielTolentino"
                target="_blank"
                rel="noopener noreferrer"
                >
                 <img className={styles.icons} src='/github-svgrepo-com.svg' /> GitHub <span><svg class="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg></span>
                </a>
              </div>
              <div className={styles.link_card}>
              <a  className={styles.link}                href="https://www.linkedin.com/in/daniel-tolentino-ferreira-santos/"
                target="_blank"
                rel="noopener noreferrer"
                >
                 <img className={styles.icons} src='/linkedin.svg' /> Linkedin <span><svg class="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg></span>
                </a>
                </div>
            </div>
            <h2 className={styles.description}>Gosto de tecnologia, Linux e o mundo Open Source!</h2>
          </div>
        </div>
      </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        @media (prefers-color-scheme: dark) {
          body {
            filter: invert(100%);
            background-color: rgb(29, 32, 31) !important;
          }
          img, 
          .icons,
          .emoji,
          iframe /* for recaptcha */ {
            filter: invert(100%) !important;
          }
        }
      `}</style>
    </div>
  )
}
