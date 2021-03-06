import { useMemo, useState } from "react";
import "./index.css";
import "./App.css"
import 'antd/dist/antd.css';
import { useEffect } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate, useLocation } from "react-router-dom";
import { ProductType } from "./types/product";
import { CategoryType } from "./types/category";
import { createProduct, getbyPage, getLatest, productList, removeProduct, searchProduct, updateProduct } from "./api/product";
import { message, Modal, notification } from "antd";
import { UserType } from "./types/user";
import { signin, signup } from "./api/auth";
import { authenticate } from "./utils/localStorage";
import { Categorylist } from "./api/category";
import WebsiteLayout from "./Pages/layouts/WebsiteLayout";
import Home from "./Pages/website/Home";
import Products from "./Pages/website/Products";
import ProductDetail from "./Pages/website/ProductDetail";
import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/SignUp";
import PrivateRouter from "./Components/PrivateRouter";
import AdminLayout from "./Pages/layouts/AdminLayout";
import DashBoard from "./admin/DashBoard";
import ProductManager from "./admin/Product/Product";
import ProductAdd from "./admin/Product/ProductAdd";
import ProductEdit from "./admin/Product/ProductEdit";
import CategoryManager from "./admin/Category/CategoryManager";
import NewsManager from "./admin/News/NewsManager";
import OrderManager from "./admin/Order/OrderManager";
import ContactManager from "./admin/Contact/ContactManager";
import UserManager from "./admin/User/UserManager";
import axios from "axios";
import { isAuthenticate } from "./utils/localStorage";
import ProductSearch from "./Pages/website/ProductSearch";
import EmptyPage from "./Pages/website/EmptyPage";
import Category from "./Pages/website/Category";
import ProductFilter from "./Pages/website/ProductFilter";
import {user} from './api/product'
import UserInformation from "./Pages/users/UserInformation";
function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}
const App = () => {
  const navigate = useNavigate()
  const query = useQuery();
  const pageId = query.get('page')

  
  //Products
  const [products, setProducts] = useState<ProductType[]>([]);
  const[productPage,setProductPage] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [latestProduct, setLatestProduct] = useState<ProductType[]>([]);
  const [searchProducts,setSearchProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await productList();
      setProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getPage = async () => {
      const page:any = pageId
      const { data } = await getbyPage(page);
      console.log(data);
      setProductPage(data)
    };
   getPage();
  },[pageId]);
  // Remove
  const handleRemove = async (id :number)=>{
  try {
    Modal.confirm({
      title: 'Are you sure to remove this product ?',
      onOk: async () => {
        console.log(id);
         await removeProduct(id)
          message.success('Delete product successfully',2);
        setProducts(products.filter(item => item._id !== id));
      }
    })
  } catch (error:any) {
    message.error(`${error.response.data.message}`,2);
  }
  }
  // Product Add
  const handleAdd = async (product: ProductType) =>{
try {
  const {data} = await createProduct()
  console.log(data);
  setProducts([...products,data])
  navigate("/admin/product");
} catch (error) {
  console.log("Khong thanh cong");
}
  }

  // Product Update
  const handleUpdate = async (product:any) =>{
    try {
      const {data} = await updateProduct(product)
      setProducts(products.map(item => item._id == data._id ? data : item));
        message.success('Update product successfully',2);
    // navigate("/admin/product")
    } catch (error) {
     console.log(error);
     
    }
  }
  //SignIn
  const handleSignIn = async (user : UserType) => {
   try {
     const {data} = await signin(user);
   
     notification.success({
       message: `Login successfully!!`,
       description: `Welcome to my website ${data.user.name}`
     })
     authenticate(data, () => {
      navigate('/')
  })
     
   } catch (error:any) {
    notification.error({
      message: `Login failed !!`,
      description: `${error.response.data.message}`,
    })
   } 
  }
//Sign up
const handleSignUp = async (user : UserType) => {
  try {
    const {data} = await signup(user)
    notification.success({
      message: `Register successfully!!`,
      description: `Please login your account`
    })
    navigate('/sign-in')
  } catch (error:any) {
    notification.error({
      message: `Login failed !!`,
      description: `${error.response.data.message}`,
    })
    
  }
}
// Get Categorylist
useEffect(() => {
  const getCategory = async () => {
    const {data} = await Categorylist()
    setCategory(data)
  }
  getCategory()
},[])

// Get latest products
useEffect(() => {
  const getLatestProducts = async () => {
    const limit = 4
    const {data} = await getLatest(limit)
    setLatestProduct(data)
  }
  getLatestProducts()
},[])
// Search products
const onHandleSearch = async(keyword: string)=>{
  try {
    const {data} = await searchProduct(keyword)
    setSearchProducts(data) 
    notification.success({
      message: "T??m ki???m th??nh c??ng !!",
      description: `S???n ph???m cho t??? kho?? : ${keyword}`
    })
    navigate(`/products/search?q=${keyword}`) 
  } catch (error:any) {
    notification.error({
      message: "Kh??ng th??? t??m ki???m",
      description: `${error.response.data.message}`
    })
    navigate(`/products/empty?q=${keyword}`)
  }
  
}
const handleLogout = () =>{
  if(localStorage.getItem('user')){
    localStorage.removeItem('user')
    navigate('/')
    message.success('????ng xu???t th??nh c??ng !')
  }
}
  return (
    <div className="App ">
      <Routes>
        <Route element={<WebsiteLayout logOut={handleLogout} />}>
        <Route path="/" element={<Home products={products} category={category} latestProduct={latestProduct} />} />
        <Route path="products" element={<Products category={category}  products={productPage} data={products} onSearchProduct={onHandleSearch}/>}/>
        <Route path="products/search" element={<ProductSearch data={searchProducts} />} />
        <Route path="products/filter" element={<ProductFilter category={category}  />} />
        <Route path="products/empty" element={<EmptyPage/>}/>
        <Route path="product-detail/:id" element={<ProductDetail/>} />
        <Route path="category/:id/" element={<Category category={category}/>}/>
        <Route path="sign-in" element={<SignIn onSignin={handleSignIn} />} />
        <Route path="sign-up" element={<SignUp onSignup={handleSignUp} />} />
        <Route path="user-information" element={<UserInformation/>}/>
        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="product">
           <Route index element={<ProductManager onRemove={handleRemove} data={products}/>}/>
           <Route path="add" element={<ProductAdd onAdd={handleAdd}/>}/>
           <Route path=":id/edit" element={<ProductEdit onUpdate={handleUpdate}/>}/>
          </Route>
          <Route path="category" element={<CategoryManager />} />
          <Route path="news" element={<NewsManager />} />
          <Route path="orders" element={<OrderManager />} />
          <Route path="contact" element={<ContactManager />} />
          <Route path="user" element={<UserManager />} />
          <Route path="order" element={<OrderManager />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
