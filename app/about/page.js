"use client";
import styles from '../../styles/About.module.css'

export default function About() {
  return (
    <div className="navbar">
      <main>
        <div className={styles.container}>
          <div className={styles.description}>
            <h2 className={styles.main_title}>Sobre mim</h2>
            <p>
              Olá, meu nome é <b>Daniel Tolentino</b>, tenho 26 anos e sou
              estudante de <b>Sistemas para Internet</b> na UNOPAR.
              <br></br>
              Desenvolvo projetos principalmente em <b>Front-end</b> e
              utilizando <b>Next.js</b>. Todos os meus códigos estão disponíveis
              no GitHub. Também tenho interesse em desenvolvimento back-end.
            </p>
            <a
              className={styles.mail}
              href="mailto:contato@danieltolentino.net"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15.5c0-.563.186-1.082.5-1.5H5.252a2.249 2.249 0 0 0-2.249 2.25v.919c0 .572.179 1.13.51 1.596C5.057 20.929 7.58 22 11 22h.05a2.514 2.514 0 0 1-.05-.5v-6ZM11 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10ZM17.51 18.927l-5.491-3.203A2 2 0 0 1 14 14h7a2 2 0 0 1 2 1.97l-5.49 2.957Z"
                  fill="#212121"
                />
                <path
                  d="M17.737 19.94 23 17.108V21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4.13l5.248 3.062a.5.5 0 0 0 .489.009Z"
                  fill="#212121"
                />
              </svg>

              <span className={styles.title}>Entre em contato!</span>
            </a>
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
        a {
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
      }
      `}</style>
    </div>
  );
}
