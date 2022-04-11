
import { Breadcrumb,Layout, Pagination} from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import CarouselLayout from '../../Components/CarouselLayout'
import ProductContent from '../../Components/ProductContent'
import ProductSider from '../../Components/ProductSider'
import { ProductType } from '../../types/product'

type ProductsProps = {
  products: ProductType[],
  onSearchProduct(keyword:any) : () => void
  onPage:() => (page: number) => void
}

const Products = (props: ProductsProps) => {
  const navigate = useNavigate()
  const [page,setPage] = useState<any>({
    current : 1
  })
  const onChange = (page: number) => {
    console.log(page);
    setPage({
      current: page,
    });
    navigate(`/products/page?=${page}`)
  };  
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
  <Pagination style={{margin:"0 auto"}} onChange={onChange} defaultCurrent={page} total={50} />
    </>    
  )
}

export default Products