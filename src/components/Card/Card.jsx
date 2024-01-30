function Card(props) {
  //console.log(props)

  const item = props.item

  console.log(item)

  return (
    <>
      <div className='card'>
        <h2>{item.name}</h2>

        <div className="tags">
          <div className="tag">{item.status}</div>
          <div className="tag">{item.species}</div>
          <div className="tag">{item.origin}</div>
          <div className="tag">{item.created}</div>
        </div>

        <img src={item.image} />
      </div>
    </>
  )
}

export default Card