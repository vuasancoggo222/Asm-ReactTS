import instance from "./instance"


export const Categorylist = () =>{
    const url = `categories`
    return instance.get(url)
    }

export const create = (category: string)=>{
    const url = `categories`
    return instance.post(url)
}
export const categoryRead = (id: string)=>{
    const url = `category/${id}`
    return instance.get(url)
}