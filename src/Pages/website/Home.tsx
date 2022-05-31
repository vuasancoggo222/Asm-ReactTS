import { Layout } from 'antd'
import React from 'react'
import SiderLayout from '../../Components/SiderLayout'
import CarouselLayout from '../../Components/CarouselLayout'
import ContentLayout from '../../Components/ContentLayout'
import { ProductType } from '../../types/product'
import { CategoryType } from '../../types/category'

type Props = {
  products : ProductType[]
  category : CategoryType[]
  latestProduct : ProductType[]
}

const Home = (props: Props) => {
  console.log(props);
  
  return (
  <>
  <CarouselLayout/>
    <Layout>
    <ContentLayout latestProduct={props.latestProduct}/> 
    </Layout>
  </>
  )
}

export default Home