import ManageProducts from '@/components/modules/shop/product'
import { getAllProducts } from '@/services/product'
import React from 'react'

const ProductPage = async() => {
  const {data,meta} = await getAllProducts();
  // console.log(data,meta)
  return (
    <div>
        <ManageProducts products={data} /> 
    </div>
  )
}

export default ProductPage