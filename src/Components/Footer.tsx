import React from 'react'
import { Layout } from "antd";
import { Footer } from 'antd/lib/layout/layout';
type Props = {}

const FooterLayout = (props: Props) => {
  return (
    <Footer style={{ textAlign: 'center' }}>This is a footer</Footer>
  )
}

export default FooterLayout;