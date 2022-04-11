import { Breadcrumb, Layout, Pagination } from 'antd'
import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProductContent from '../../Components/ProductContent'
import ProductSider from '../../Components/ProductSider'
import SearchValue from '../../Components/SearchValue'
import { ProductType } from '../../types/product'

type ProductSearchProps = {
    data : ProductType[]
}
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
const ProductSearch = (props: ProductSearchProps) => {
      const query = useQuery();
      const keyword = query.get('q')
    console.log(props);  
  return (
    <>
    <Breadcrumb style={{ marginLeft: "230px",marginTop: "15px"}}>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to="/products">Products</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to="/products/search">Search</Link></Breadcrumb.Item>
  </Breadcrumb>
    <h1 style={{ marginLeft:"250px",paddingTop:"25px"}}>Sản phẩm tìm kiếm cho :"{ keyword}" </h1>
  <Layout style={{ flexDirection:"row"}}>
    <ProductSider/> 
    <SearchValue search={props.data}/>
  </Layout>
    </>
  )
}

export default ProductSearch