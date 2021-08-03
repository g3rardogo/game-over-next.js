import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState<TProduct[]>([])

    useEffect(() => {
        window
            .fetch('/api/products')
            .then(response => response.json())
            .then(({ data, length}) => {
                setProducts(data)
            })
    }, [])

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Home
