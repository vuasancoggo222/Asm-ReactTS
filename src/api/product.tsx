import instance from "./instance";
import type { ProductType } from "../types/product";
import { isAuthenticate } from "../utils/localStorage";
const {user} = isAuthenticate()
 const header = {
    headers: {
        "Authorization": `Bearer ${user.token}`
    }
  }
export const productList = () => {
  const url = `products`;
  return instance.get(url);
};
export const createProduct = (product: ProductType)=>{
  
}
export const updateProduct = (product: ProductType) => {

};
export const read = ( id : number ) => {
    const url = `product/${id}`;
    return instance.get(url);
  };
  export const removeProduct = ( id : number ) => {
    const url = `product/${id}/${user._id}`;
    return instance.delete(url,header);
  };
  export const getLatest = (limit : number) =>{
    const url = `products-latest?limit=${limit}`
    return instance.get(url)
  }
  export const searchProduct = (keyword : string)=>{
    const url =`products/search?q=${keyword}`
    return instance.get(url)
  }
  export const getbyPage = (page: number) => {
    const url = `products/page?={page}`;
    return instance.get(url);
  };