import React from 'react'
import NavAdmin from "../../Components/admin/NavAdmin"
import {Outlet} from 'react-router-dom'
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout'
import HeaderAdmin from '../../Components/admin/HeaderAdmin'
type Props = {}

const AdminLayout = (props: Props) => {
  return (
   <div>
     <Layout>
     <NavAdmin/>
      <Layout>
      <HeaderAdmin/>
      <Content>
        <Outlet/>
      </Content>
      <Footer/>
      </Layout>
     </Layout>
      
   </div>
  )
}

export default AdminLayout