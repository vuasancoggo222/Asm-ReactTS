import { Breadcrumb, Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { categoryRead } from '../../api/category'
import { priceRange } from '../../api/product'
import CategoryContent from '../../Components/CategoryContent'
import FilterContent from '../../Components/FilterContent'
import ProductSider from '../../Components/ProductSider'
import { CategoryType } from '../../types/category'

type Props = {
    category : CategoryType[]
}
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
const ProductFilter = (props: Props) => {
    const [productsInRange,setProducts]=  useState([])
    const query = useQuery();
      const gte = query.get('gte')
      const lte = query.get('lte')
      console.log(gte);
      
      useEffect(() => {
          const getByPriceRange = async ()=>{
              const {data} = await priceRange(lte,gte)
              setProducts(data)
          }
          getByPriceRange()
      },[gte,lte]);
  return (
    <>
    <Breadcrumb style={{ marginLeft: "230px",marginTop: "15px"}}>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to="/products">Products</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link to="/products">Filter</Link></Breadcrumb.Item>
  </Breadcrumb>
  <Layout style={{ flexDirection:"row"}}>
    <ProductSider category={props.category} />
    <FilterContent products={productsInRange}/>
  </Layout>
    </>
  )
}

export default ProductFilter