import { Breadcrumb, Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categoryRead } from '../../api/category'
import CategoryContent from '../../Components/CategoryContent'
import ProductContent from '../../Components/ProductContent'
import ProductSider from '../../Components/ProductSider'
import { CategoryType } from '../../types/category'
import { ProductType } from '../../types/product'

type Props = {
    category : CategoryType[]
}

const Category = (props: Props) => {
    const [products,setProducts] = useState<any>([])
    const {id} = useParams()
    useEffect(() => {
        const getProductByCategory = async ()=>{
            const {data} = await categoryRead(id)
            
            setProducts(data)
        }
        getProductByCategory()
    },[id])
   console.log(products);
   
  return (
   <>
   <Breadcrumb style={{ marginLeft: "230px",marginTop: "15px"}}>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to="/products">Category</Link></Breadcrumb.Item>
  </Breadcrumb>
  <Layout style={{ flexDirection:"row"}}>
    <ProductSider category={props.category} /> 
    <CategoryContent data={products}/>
  </Layout>
   </>
  )
}

export default Category