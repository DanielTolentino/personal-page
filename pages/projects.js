import Head from "next/head";

import NavBar from "../components/NavBar";
import Card from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projetos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <div id="grid">
          <Card
            title="Hub"
            description="Hub com links para meus projetos, acesso rápido à ferramentas e documentação e meus servidores.
            Feito com Astro e TailwindCSS."
            url="https://github.com/DanielTolentino/Hub"
            image="/hub.png"
            alt="Hub pessoal"
          />

          <Card
            title="Primeiro Portfólio"
            description="Página criada como projeto final da imersão Alura. Feito com HTML, CSS e JavaScript e depois portado para next.js por curiosidade e para aprender mais sobre o framework e utilizar as otmiizações."
            url="https://portfolio-danieltolentino.vercel.app/"
            image="/old-portfolio.png"
            alt="project 1"
          />

          <Card
            title="Conversor de Moedas"
            description="Converte Dólar, Euro e Bitcoin em Reais. Usa uma API para atualizar a cotação em tempo real."
            url="https://conversor-de-dolar-tolentino.vercel.app/"
            image="/conversor.png"
            alt="Conversor de moeda"
          />
          <Card
            title="Site para Barbearia"
            description="Projeto desenvolvido na maratona codar.me. Feito com HTML, CSS e JavaScript."
            url="https://codar-me-maratona-starter-barbearia.vercel.app/"
            image="/barbearia.png"
            alt="Site para Barbearia"
          />
          <Card
            title="Site para PetShop"
            description="Projeto desenvolvido na maratona codar.me. Feito com HTML, CSS e JavaScript."
            url="https://codar-me-maratona-starter-veterinaria.vercel.app/"
            image="/pet-store.png"
            alt="Site para PetShop"
          />
          <Card
            title="MoviesLibrary"
            description="Site para buscar informações de filmes usando a API do The Movie Database. Feito com React. Tutorial do Youtube"
            url="https://movies-library-mocha.vercel.app/"
            image="/movies.png"
            alt="Site para buscar filmes"
          />
          <Card
            title="CoronaVirus Tracker"
            description="Dashboard criada usando GoogleSites com embbeds de estatísticas do Covid-19 e informações/inforgráficos sobre o vírus."
            url="https://sites.google.com/view/corona-no-brasil/in%C3%ADcio"
            image="/corona.png"
            alt="CoronaVirus Tracker"
          />
        </div>
      </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          backgroud-color: red;
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
        #grid {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 50px;
          gap: 25px;
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
  );
}
