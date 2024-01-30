import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/232.jpeg',
    status: 'Status: Vivo',
    species: 'Espécie: Humana',
    origin: 'Origem: Terra',
    created: 'Criação: 30-12-2017'

  }
  const item2 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Status: Vivo',
    species: 'Espécie: Humana',
    origin: 'Origem: Terra (C-137)',
    created: 'Criação: 04-11-2017'

  }
  const item3 = {
    name: 'Johnny Depp',
    image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
    status: 'Status: Vivo',
    species: 'Espécie: Humana',
    origin: 'Origem: Terra (C-500A)',
    created: 'Criação: 29-12-2017'

  }

  const item4 = {
    name: 'Jerry Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    status: 'Status: Vivo',
    species: 'Espécie: Humana',
    origin: 'Origem: Terra',
    created: 'Criação: 04-11-2017'

  }

  return (
    <>
    <div className='cards'> 
      <Card item={item1} />
      <Card item={item2} />
      <Card item={item3} />
      <Card item={item4} />
    </div>
    </>
  )
}

export default App