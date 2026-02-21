import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema'

function App() {


  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Aula ao vivo de React'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[1],
      data: new Date(),
      titulo: 'Palestra sobre Python'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[3],
      data: new Date(),
      titulo: 'Aulas de IA'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[4],
      data: new Date(),
      titulo: 'Como funciona o Power BI'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[4],
      data: new Date(),
      titulo: 'Como funciona o Power BI'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[5],
      data: new Date(),
      titulo: 'Como funciona o Power BI'
    },
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[5],
      data: new Date(),
      titulo: 'Como funciona o Power BI'
    },

  ])

  function adicionarEvento(evento) {

    setEventos([...eventos, evento])
  }
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento 
        temas={temas} 
        aoSubmeter={adicionarEvento} 
      />
      <section className="container">
        {temas.map(function (tema) {
          if (!eventos.some(function(evento) {
            return evento.tema.id == tema.id
          })) {
            return null
          }

          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos.filter(function (evento) {
                    return evento.tema.id == tema.id
                })
                .map(function (evento, indice) {
                  return <CardEvento evento={evento} key={indice} />
                })}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default App