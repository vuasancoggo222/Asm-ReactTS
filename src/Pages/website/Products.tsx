
import { Breadcrumb,Layout} from 'antd'
import Search from 'antd/lib/input/Search'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CarouselLayout from '../../Components/CarouselLayout'
import ProductContent from '../../Components/ProductContent'
import ProductSider from '../../Components/ProductSider'
import { ProductType } from '../../types/product'

type ProductsProps = {
  products: ProductType[],
  onSearchProduct(keyword:any) : () => void
}

const Products = (props: ProductsProps) => {  
  const onSearch = (value:any) =>{
    props.onSearchProduct(value);
  }
  return (
    <>
  <Breadcrumb style={{ marginLeft: "230px",marginTop: "15px"}}>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to="/products">Products</Link></Breadcrumb.Item>
  </Breadcrumb>
  <Search placeholder="Search product" onSearch={onSearch} enterButton style={{width:"450px",marginLeft:"290px",marginTop:"25px"}} />
  <Layout style={{ flexDirection:"row"}}>
    <ProductSider/> 
    <ProductContent products={props.products}/>
  </Layout>
    </>    
  )
}

export default Products