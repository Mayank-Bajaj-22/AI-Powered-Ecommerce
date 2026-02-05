import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext';
import axios from 'axios';

export const shopDataContext = createContext();

function ShopContext({ children }) {

    let { serverUrl } = useContext(authDataContext)

    let [products, setProducts] = useState([]);
    let [search, setSearch] = useState('');
    let [showSearch, setShowSearch] = useState(false);
    let [loading,setLoading] = useState(false)
    let [cartItem, setCartItem] = useState({});
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

    const addtoCart = async (itemId , size) => {
        if (!size) {
            console.log("Select Product Size");
            return;
        }

        let cartData = structuredClone(cartItem); // Clone the product

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItem(cartData);
        console.log(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalCount
    }

    useEffect(() => {
        getProducts()
    }, [])

    let value = {
        products, 
        setProducts,
        currency,
        delivery_fee,
        getProducts,
        search, 
        setSearch,
        showSearch, 
        setShowSearch,
        loading,
        addtoCart,
        getCartCount,
        cartItem, 
        setCartItem
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