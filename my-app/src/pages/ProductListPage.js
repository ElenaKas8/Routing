import React, { useEffect, useState } from 'react'

const ProductListPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products))
    }, [])


  return (
    <div className='content'>
        <ul>
            {products.map(product =>
                 <li key={product.id}>
                    {` ${product.brand} - ${product.title}`}
                    </li>)}
        </ul>
    </div>
  )
}

export default ProductListPage