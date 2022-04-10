import { Col, Row, Slider } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import { ProductType } from '../types/product'
type Props = {
latestProduct : ProductType[]
}

const ContentLayout = (props: Props) => {
  console.log(props.latestProduct);
  
  const style = {padding: '8px 0' };
  return (
   <Content>
     <div style={{marginLeft:"120px"}}>
   <div>
     <h2 style={{textAlign: 'center'}}>Sản phẩm mới nhất</h2>
   <Row gutter={[32, 32]}>
    {props.latestProduct && props.latestProduct.map((item,index) => {
      return <Col span={6} key={index}>
      <div style={style}>
        <img src={`http://localhost:8001/uploads/${item.image}`} width="240px" alt="" />
       <div style={{textAlign: 'center'}}>
       <span>{item.name}</span> <br />
        <span>{item.price}</span>
       </div>
      </div>
    </Col>
      
    })}
    </Row>
   </div>
  
   </div>
   </Content>
  )
}

export default ContentLayout