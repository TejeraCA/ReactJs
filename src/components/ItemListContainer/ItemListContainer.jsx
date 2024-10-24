import { useEffect, useState } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()

    console.log(idCategory)



    useEffect(() => {
        getProducts()
            .then((data) => {
                if (idCategory) {
                    const filterProducts = data.filter((product) => product.category === idCategory)
                setProducts(filterProducts)
                } else {
                    setProducts(data)
                }
            })

            .catch((error) => {
                console.error(error)
            })

            .finally(() => {
                console.log("finalizo la promesa")
            })
    }, [idCategory])

    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList className="contenedor" products={products} />
        </div>
    )
}

export default ItemListContainer