function Card() {
    return (
        <>
          
          <div className='card'>
            <h2>Morty Smith</h2>
          <div className="tags">  
            <div className="tag">Status: Vivo</div>
            <div className="tag">Espécie: Humana</div>
            <div className="tag">Origem: Terra</div>
            <div className="tag">Criação: 30-12-2017</div>
           </div> 
            <img src="https://rickandmortyapi.com/api/character/avatar/232.jpeg"/>
          </div>
        </>
    )
}

export default Card