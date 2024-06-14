import { useEffect, useState } from 'react'
import Card from '../Components/Card/Card'

function Home() {

  const [items, setItens] = useState([])

  async function carregarDados() {
    const apiUrl = "https://rickandmortyapi.com/api/character"
    const response = await fetch(apiUrl)
    const body = await response.json()
    const results = body.results
    console.log('results', results)
    setItens(results);
  }

  useEffect(function() {
    carregarDados()
  }, [])

  return (
    <>
      <div className="cards">
        {
          items.map(e => 
              <Card item={e} key={e.name} />
          )
        }
      </div>
    </>
  )

}

export default Home