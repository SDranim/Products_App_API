import React, { useEffect, useState } from 'react'
import Productscard from './Productscard'
import axios from 'axios'

function Produstlist() {
    const [products, setProducts] = useState([])
    const API='https://fakestoreapi.com/products'
    useEffect(() => {
   axios.get(API)
   .then((res)=>setProducts(res.data)).catch((err)=>console.log(err))
    }, [])
    
  return (
    <div className='listProd'>
{products.map((el,index)=>(<Productscard el={el} key={index}/>))}
    </div>
  )
}

export default Produstlist