import './App.css'
import Card from './components/Card/Card'

function App() {
  // Carregamento de dados direto via código
  const item1 = {
    name: 'Donna Gueterman',
    image: 'https://rickandmortyapi.com/api/character/avatar/102.jpeg',
    status: 'Status: Morta',
    species: 'Espécie: Robô',
    origin: 'Origem: Planeta Squanch'
  }
  const item2 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Status: Vivo',
    species: 'Espécie: Humana',
    origin: 'Origem: Planeta Terra (C-137)'
  }
  const item3 = {
    name: 'Johnny Depp',
    image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
    status: 'Status: Vivo',
    species: 'Espécie: Humana',
    origin: 'Origem: Planeta Terra (C-500A)'
  }
  const item4 = {
    name: 'Jerry Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    status: 'Status: Vivo',
    species: 'Espécie: Humana',
    origin: 'Origem: Planeta Terra'
  }

  const itens = [item1, item2, item3, item4]

  // Carregamento de dados via API (backend)
  async function carregarDadpsApi(){
    const apiUrl = 'https://rickandmortyapi.com/api/character/'

    // Preparar a requisição
    const response = await fetch(apiUrl)

    //console.log(response)

    const body = await response.json()

    console.log(body)

    // Extrair a propriedade results do body
    // Essa propriedade contém a lista de itens
    const results = body.results;

    //TODO: Desafio para volta do intervalo:
    // Enviar os results para JSX, exibindo um card para cada item da API

  }

  carregarDadpsApi()

  return (
    <>

      <div className='tittle'>
        <h1>Brincando com "The Rick and Morty API"</h1>
      </div>

      <div className='cards'>
        {itens.map((item, i) => <Card item={item} key={i} />)}
      </div>
    </>
  )
}

export default App