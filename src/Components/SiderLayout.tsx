import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, TagsOutlined, SortAscendingOutlined, ColumnHeightOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { CategoryType } from '../types/category';
const { SubMenu } = Menu;
const { Sider } = Layout;
type SiderLayoutProps = {
  category:  CategoryType[]
}

const SiderLayout = (props: SiderLayoutProps) => {
  console.log(props);
  
  return (
    <Sider width={220} className="site-layout-background">
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<TagsOutlined />} title="Category">
        {props.category && props.category.map((item,index)=>{
          return <Menu.Item key={item._id}>{item.name}</Menu.Item>
        })}
      </SubMenu>
      <SubMenu key="sub2" icon={<ColumnHeightOutlined />}  title="Sort">
        <Menu.Item icon={<SortAscendingOutlined />}  key="5">Sort Ascending</Menu.Item>
        <Menu.Item icon={<SortDescendingOutlined />} key="6">Sort Descending</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<NotificationOutlined />} title="Nav 3">
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
      </SubMenu>
    </Menu>
  </Sider>
  )
}

export default SiderLayout