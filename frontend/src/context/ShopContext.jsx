import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext';
import axios from 'axios';

export const shopDataContext = createContext();

function ShopContext({ children }) {

    let { serverUrl } = useContext(authDataContext)

    let [products, setProducts] = useState([]);
    let currency = "₹";
    let delivery_fee = 40;

    const getProducts = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/product/list")
            console.log(result.data)
            setProducts(result.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    let value = {
        products, 
        setProducts,
        currency,
        delivery_fee,
        getProducts
    }

    return (
        <div>
            <shopDataContext.Provider value={value}>
                { children }
            </shopDataContext.Provider>
        </div>
    )
}

export default ShopContext