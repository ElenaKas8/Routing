import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import loadGif from '../media/loading.gif'


function ProductPage() {

  // useParams позволяет получить параметр с ссылки маршрута. 
  // Например, указанный id в деструктуризации, ссылается на параметр id нутри Rout'a
  // <Route path='/products/:id/' element={<ProductPage/>}/>
  // ________________________^_________________________________

    const {id} = useParams()

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [foundProduct, setFoundProduct] = useState(false)

    useEffect(() => {
      fetch('https://dummyjson.com/products/'+id)
        .then(res => {
          if (res.status === 404){
            setFoundProduct(true)
          } 
          return res.json()
        })
        .then(data => {
          setProduct(data)
          setLoading(false)
        })
    }, [])

    if (loading){
      return (
        <div className='content'>
          <div>
            <img src={loadGif}/>
          </div>
          Loading...
        </div>
      )
    } else {
        if (foundProduct){
          return (
            <div className='content'>
              <h2>Product not found (404)</h2>
            </div>
          )
        } else {
            return (
              <div className="content">
                <h2>{product.title}</h2>
                <div className='product'>
                  <img src={product.thumbnail}/>
                  <div>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>{`Brand: ${product.brand}; Category: ${product.category}`}</p>
                  </div>
                </div>
              </div>
            );
          }
     }
  }
  
  export default ProductPage;