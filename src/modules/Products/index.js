import React, { useEffect, useState } from 'react'
import FeatureCard from '../../components/FeatureCard'
import ProductCards from '../../components/ProductCards'


const Products = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategories(data)
        }
        fetchCategories();
    }, [])
    return (
        <>
            <FeatureCard card={categories} />
            <ProductCards />
        </>
    )
}

export default Products