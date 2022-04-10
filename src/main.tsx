import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from 'antd';
ReactDOM.render(
  <BrowserRouter>
   <ConfigProvider>
   <App />
   </ConfigProvider>
  </BrowserRouter>,
  document.getElementById('root')
)