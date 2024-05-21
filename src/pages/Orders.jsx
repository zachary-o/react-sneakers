import axios from "axios"
import { useEffect, useState } from "react"
import CardMain from "../components/CardMain"

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          "https://6649c9264032b1331beececa.mockapi.io/orders"
        )
        setOrders(response.data.map((obj) => obj.items).flat())
        // setOrders(response.data.reduce((prev, obj) => [...prev, ...obj.items], []))
      } catch (error) {
        console.log("error", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchOrders()
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Orders </h1>
      </div>

      <div className="mainItems">
        {orders.map((item) => (
          <CardMain
            key={item.id}
            {...item}
            isInFavorites={true}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  )
}
export default Orders
