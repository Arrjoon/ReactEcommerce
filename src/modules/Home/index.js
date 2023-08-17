import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import StatCard from '../../components/StatCard'
import ProductCards from '../../components/ProductCards'
import CategoryCards from '../../components/CategoryCards'


const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            console.log(response)
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()

    }, [])


    return (
        <>
            <Hero />,
            <CategoryCards></CategoryCards>
            <div className="flex flex-col text-center w-full mb-20 mt-6 mb-2">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Our Special Products</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Top Deal of the day</h1>
            </div>
            {
                products.length > 0 ?

                    <ProductCards products={products} />
                    :
                    <div>Loading .....</div>
            }
            <StatCard />
        </>
    )
}

export default Home