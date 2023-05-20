import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(1);
    const [products, setProducts] = useState([])
    const getData = async () => {
        const url = `https://6468b404e99f0ba0a82ab786.mockapi.io/products`
        axios
            .get(url)
            .then((res) => {
                // console.log(res);
                setProducts(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(products)
    return (
        <div>
            <AppContext.Provider value={{ show, count, setShow, setCount, products, setProducts }}>
                {children}
            </AppContext.Provider>
            
        </div>
    )
}