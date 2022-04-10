import React, { useEffect, useState } from "react";
import { Form, Input, Button, InputNumber, Switch, Select, Progress, notification } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types/product";
import {Categorylist} from '../../api/category'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import axios from "axios";
type ProductAddProps = {
  onAdd: (product: ProductType) => void;
};

const ProductAdd = (props: ProductAddProps) => {
const [category, setCategory] = useState([])
const [fileList, setFileList] = useState([]);
console.log(fileList);
const onChange = ({ fileList: newFileList }:any) => {
  setFileList(newFileList);
};  

    const navigate = useNavigate();
  const onFinish = (values: ProductType) => {
    const newValues = {...values, image : fileList[0]}
    console.log("Success:",newValues);
    props.onAdd(newValues);
    navigate("/admin/product");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await Categorylist();
      console.log(data);
      setCategory(data)
    };
    getCategory();
  },[])
  
  return (
    <Form
    encType="multipart/form-data"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 8 }}
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{ status : true, }}
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
        rules={[{ required: true, message: 'Please input product description!' },{min : 29,message:"Product name must be at least 30 characters"}]}
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
  );
};

export default ProductAdd;
