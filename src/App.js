function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>469 USD</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">All Sneakers</h1>
        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/01.jpg"
              alt="Sneakers picture"
            />
            <h5>Men's Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>39 USD</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="/img/plus.svg" alt="Add" />
              </button>
            </div>
          </div>
          <div className="card">
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
              <button className="button">
                <img height={11} width={11} src="/img/plus.svg" alt="Add" />
              </button>
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
              <button className="button">
                <img height={11} width={11} src="/img/plus.svg" alt="Add" />
              </button>
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
              <button className="button">
                <img height={11} width={11} src="/img/plus.svg" alt="Add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
