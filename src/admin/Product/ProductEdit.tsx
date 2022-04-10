import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {read} from "../../api/product"
import { Form, Input, Button, InputNumber, Switch, notification, Upload, Select } from "antd";
import { ProductType } from "../../types/product";
import ImgCrop from 'antd-img-crop';
import axios from 'axios';
import { Categorylist } from '../../api/category';
type ProductEditProps = {
    onUpdate : (product: ProductType) => void
}

const ProductEdit = (props: ProductEditProps) => {
    const {id} = useParams()
    const [form] = Form.useForm();
    const [url,setUrl] = useState([])
    const [category, setCategory] = useState([])
    useEffect(() => {
    const getProducts =  async () =>{
        const {data} = await read(id)
        form.setFieldsValue({
            name: data.name,
            price : data.price,
            description : data.description,
            image : data.image,
            category : data.category
          });
    }
    getProducts()
    },[])
    useEffect(() => {
      const getCategory = async () => {
        const { data } = await Categorylist();
        console.log(data);
        setCategory(data)
      };
      getCategory();
    },[])
    const [fileList, setFileList] = useState([]);
    console.log(fileList);
    const onChange = ({ fileList: newFileList }:any) => {
      setFileList(newFileList);
    };  
    
        const navigate = useNavigate();
      const onFinish = (values: ProductType) => {
        const newValues = {...values,_id:id,image : fileList[0]}
        console.log("Success:",newValues);
        props.onUpdate(newValues);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
      };
  return (
    <Form
    form={form}
    labelCol={{ span: 6 }}
    wrapperCol={{ span: 8 }}
    autoComplete="off"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    initialValues={{ status : true }}
   
  >
    <Form.Item label="Product Name" name="name" rules={[{ required: true, message:"Please input product name"},{min: 5 , message : "Product name must be at least 5 characters"}]}>
      <Input />
    </Form.Item>
    <Form.Item
      label="Product Price"
      name="price"
      rules={[{ required: true, message: 'Please input product price!' }]}
    >
      <InputNumber/>
    </Form.Item>
    <Form.Item
      label="Description"
      name="description"
      rules={[{ required: true, message: 'Please input product description!' },{min : 30,message:"Product name must be at least 30 characters"}]}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item label="image">
<ImgCrop>
<Upload
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        name = "image"
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
</ImgCrop>
      </Form.Item>
<Form.Item label="Select" name="category" >
        <Select>
          {category && category.map((item : ProductType,index) => { 
            return <Select.Option key={index} value={item._id}>{item.name}</Select.Option>
          }
          )}
        </Select>
      </Form.Item>
    <Form.Item
      label="Stocking"
      name="status"
      valuePropName="checked"
      
    >
      <Switch defaultChecked />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 6, span: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default ProductEdit