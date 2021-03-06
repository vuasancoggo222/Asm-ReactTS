import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLayout from '../../Components/Header'
import { Layout } from "antd";
import FooterLayout from '../../Components/Footer';
import { ProductType } from '../../types/product';
import { CategoryType } from '../../types/category';
type WebsiteLayoutProps = {
 logOut : () => void
}

const WebsiteLayout = (props: WebsiteLayoutProps) => {
  return (
    <Layout className="layout" style={{margin:"0 15px"}}>
      <HeaderLayout onLogout={()=> props.logOut()}/>
      <Outlet/>
      <FooterLayout/>
    </Layout>
  )
}

export default WebsiteLayout