import React from 'react'
import { Link } from 'react-router-dom'


function Productscard({el}) {
  return (
    <main role="main">
    <div className="product">
      <figure>
        <img src={el.image}  style={{width:'200px' , height:'300px'}} alt='prod' className="product-image" />
      </figure>
      <div className="product-description">
        <div className="info">
          <h1>{el.title}</h1>
        </div>
        <div className="price">
          {el.price}€
        </div>
      </div>
      <div className="product-sidebar">
      <Link to={`/products/${el.id}`}><button className="info">Info</button></Link>
    <button className="info">Add</button>
     <button className="info">sizes</button>
      </div>
    </div>
  </main>
  )
}

export default Productscard