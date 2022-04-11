import { Breadcrumb, Empty, Layout } from 'antd';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ProductSider from '../../Components/ProductSider';
type EmptyPageProps = {
    
}
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
const EmptyPage = (props: EmptyPageProps) => {
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
    <h1 style={{ marginLeft:"250px",paddingTop:"25px"}}>Không tìm thấy sản phẩm với từ khoá :"{ keyword}" </h1>
  <Layout style={{ flexDirection:"row"}}>
    <ProductSider/> 
    <Empty style={{marginLeft:"500px" }}/>
  </Layout>
    </>
  )
}

export default EmptyPage