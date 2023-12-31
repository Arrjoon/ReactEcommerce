import React, { useEffect, useState } from 'react'
import ProductCards from '../../components/ProductCards'
import CategoryCards from '../../components/CategoryCards'


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            console.log(response)
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()

    }, [])


    return (
        <>
            <CategoryCards />
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">products</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All products</h1>
            </div>
            {
                products.length > 0 ?

                    <ProductCards products={products} />
                    :
                    <div>Loading .....</div>
            }

        </>
    )
}

export default Products