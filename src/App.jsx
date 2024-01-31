import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'

function App() {

  const [itens, setItens] = useState([])

  async function carregarDadosApi() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/'

    const response = await fetch(apiUrl)

    const body = await response.json()

    const results = body.results

    console.log(results)

    setItens(results)
  }
  useEffect(function () {
    carregarDadosApi()
  }, [])

  return (
    <>
      <div className='tittle'>
        <h1>The Rick and Morty API</h1>
      </div>

      <div className="cards">
        {itens.map((item, i) => <Card item={item} key={i} />)}
      </div>
    </>
  )
}

export default App