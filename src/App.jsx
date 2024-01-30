import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: 'Donna Gueterman',
    image: 'https://rickandmortyapi.com/api/character/avatar/232.jpeg',
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

  return (
    <>

      <div className='tittle'>
        <h1>Brincando com "The Rick and Morty API"</h1>
      </div>

      <div className='cards'>

        {/* <Card item={item1} />
            <Card item={item2} />
            <Card item={item3} />
            <Card item={item4} /> */}
        {itens.map(item => <Card item={item} />)}
      </div>
    </>
  )
}

export default App