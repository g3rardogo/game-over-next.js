import React, {useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const router = useRouter()
    const [item, setItem] = useState<TProduct[]>([])
    const { id } = router.query
    useEffect(() => {
        window
            .fetch(`/api/products/${id}`)
            .then(response => response.json())
            .then((data) => {
                setItem(data)
            })
    }, [])

    return (
        <div>
            Esta es la pagina del producto: {item.name}
        </div>
    )
}

export default ProductItem
