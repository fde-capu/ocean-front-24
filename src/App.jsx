import './App.css'
import Card from './Components/Card/Card'

const item1 = {
  key: 1,
  name: "Rick Sanches",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}

const item2 = {
  key: 2,
  name: "Morty Smith",
  image: "https://vignette1.wikia.nocookie.net/rickandmorty/images/3/36/Morty_Interested_S1E11.JPG/revision/latest?cb=20150908101833"
}

const item3 = {
  key: 3,
  name: "Mr. Poopybutthole",
  image: "https://i.imgur.com/2rG8iKu.png"
}

const items = [item1, item2, item3];

function App() {
  return (
    <>
      <div className="cards">
        {
          items.map(function (e) {
            return (
              <Card item={e} />
            )
          })
        }
      </div>
    </>
  )
}

export default App