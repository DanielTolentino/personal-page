import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
            <h1 className={styles.title}>Olá 👋, meu nome é Daniel Tolentino </h1>
            <br />
            
            <div className={styles.links_row}>
              <a
              href="https://github.com/DanielTolentino"
              target="_blank"
              rel="noopener noreferrer"
              >
               <img className={styles.icons} src='/github-svgrepo-com.svg' /> GitHub
              </a>
            </div>
            <h2 className={styles.description}>Sou apaixonado por tecnologia, Linux e o mundo Open Source!</h2>
          </div>
        </div>
      </div>
       
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

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
      `}</style>
    </div>
  )
}
