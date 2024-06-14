import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ViewItemById.css'

function ViewItemById() {

  const [item, setItem] = useState()
  const { itemId } = useParams();
  async function carregarDados() {
    const apiUrl = "https://rickandmortyapi.com/api/character/" + itemId
    const response = await fetch(apiUrl)
    const body = await response.json()
    setItem(body);
  }

  useEffect(function() {
    carregarDados()
  }, [])

  if (!item) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Link to='/'>Voltar para Home</Link>
      <img src={item.image} />
      <h1>{item.name}</h1>
      <hr />
      <h2>STATUS: <br /><p>{item.status}</p></h2>
      <h2>SPECIES: <br /><p>{item.species}</p></h2>
    </>
  )

}

export default ViewItemById