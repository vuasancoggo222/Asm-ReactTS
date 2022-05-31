import React from 'react'
import { Avatar, Button, Dropdown, Image, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
type HeaderAdminProps = {}

const HeaderAdmin = (props: HeaderAdminProps) => {
    const menu = (
        <Menu>
          <Menu.Item key="userinfo">
            <Link to="/">Go to the home page</Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Logout
            </a>
          </Menu.Item>
        </Menu>
      );
  return (
    <div style={{marginBottom:"85px",position: "relative",left:"1100px"}}>
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf',marginTop:"10px",marginRight:"10px"}}>U</Avatar>
        <Dropdown overlay={menu} key="dropdown"  >
        <CaretDownOutlined  style={{marginTop:"15px"}} />
      </Dropdown>
    </div>
  )
}

export default HeaderAdmin