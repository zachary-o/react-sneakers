import CardMain from "./components/CardMain"
import Drawer from "./components/Drawer"
import Header from "./components/Header"

const arr = [
  {
    name: "Men's Sneakers Nike Blazer Mid Suede",
    price: "39",
    imageUrl: "/img/sneakers/1.jpg"
  },
  {
    name: "Men's Sneakers Nike Air Max 270",
    price: "69",
    imageUrl: "/img/sneakers/2.jpg"
  },
  {
    name: "Men's Sneakers Nike Blazer Mid Suede",
    price: "49",
    imageUrl: "/img/sneakers/3.jpg"
  },
  {
    name: "Men's Sneakers Puma X Aka Boku Future Rider",
    price: "59",
    imageUrl: "/img/sneakers/4.jpg"
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Sneakers</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search" />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((item) => (
            <CardMain key={item.name} {...item} />
          ))}
          {/* <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/02.jpg"
              alt="Sneakers picture"
            />
            <h5>Men's Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>39 USD</b>
              </div>
              <img className="button" height={11} width={11} src="/img/btn-plus.svg" alt="Add" />
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/03.jpg"
              alt="Sneakers picture"
            />
            <h5>Men's Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>39 USD</b>
              </div>
              <img className="button" height={11} width={11} src="/img/btn-plus.svg" alt="Add" />
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/04.jpg"
              alt="Sneakers picture"
            />
            <h5>Men's Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>39 USD</b>
              </div>
              <img className="button" height={11} width={11} src="/img/btn-plus.svg" alt="Add" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
