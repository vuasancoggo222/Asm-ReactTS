import React from 'react'
import {Link,NavLink} from "react-router-dom"
import {Menu, Layout } from "antd"
import MenuItem from 'antd/lib/menu/MenuItem'
const { Header } = Layout
type Props = {}
const HeaderLayout = (props: Props) => {
  return (
   <div className="container-fluid">
     <Header style={{background: 'white'}} className="header">
     <div className="logo" style={{ height:0}}>
       <img src="https://genk.mediacdn.vn/2020/1/2/7-15779563301001730391840.png" style={{width:"40px",position:"relative",top:"5px",borderRadius:"5px"}} />
     </div>
       <Menu theme="light" mode="horizontal" defaultSelectedKeys={['home']}>
         <MenuItem style={{ marginLeft: "160px" }} key="home"><NavLink to="/">Home</NavLink></MenuItem>
         <MenuItem key="product"><NavLink to="products">Products</NavLink></MenuItem>
         <MenuItem key="news"><NavLink to="news">News</NavLink></MenuItem>
         <MenuItem key="contact"><NavLink to="contact">Contact</NavLink></MenuItem>
         <MenuItem key="about"><NavLink to="about">About</NavLink></MenuItem>
         {(localStorage.getItem('user')) ? <><MenuItem style={{ marginLeft: "620px" }} key=""><NavLink to="sign-in">User</NavLink></MenuItem>
         <MenuItem key="logout"><NavLink to="sign-up">Log Out</NavLink></MenuItem></>   : <><MenuItem style={{ marginLeft: "620px" }} key="signin"><NavLink to="sign-in">Sign In</NavLink></MenuItem>
         <MenuItem key="signup"><NavLink to="sign-up">Sign Up</NavLink></MenuItem></>}
         
       </Menu>
    </Header>
   </div>
  )
}

export default HeaderLayout