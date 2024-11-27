"use client"
import { useCreateProductMutation, useGetProductsQuery } from "@/state/api"
import {Header} from "../(components)/Header"
import { Rating } from "../(components)/Rating"
import { use, useState } from "react"
import { PlusCircle, PlusCircleIcon, SearchIcon } from "lucide-react"
import { CreateProductModal } from "./CreateProductModal"


type ProductFormData={
  name:string;
  price: number;
  stockQuantity: number;
  rating: number;
}

export const Products = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen]=useState(false);
  const{data: products, isLoading, isError} =useGetProductsQuery(searchTerm);

  const [createProduct]= useCreateProductMutation();
  const handlerCreateProduct = async(productData:ProductFormData)=>{//productData:ProductFormData
      await createProduct(productData)
  };
  if (isLoading){
    return <div className="py-4 ">Cargando...</div>
  }
  if (isError|| !products){
    return(  
      <div className="text-center text-red-500 py-4"> 
      Conexion fallida </div>
  )
  }
 
  return (
    <div className="mx-auto pb-5 w-full ">
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded-full">
          <SearchIcon className="w-5  h-5 text-gray-500 m-2" />
          <input type="text " className="w-full py-2 px-4 rounded bg-white"
          placeholder="Buscar productos..."
           value={searchTerm}
           onChange={(e)=>setSearchTerm(e.target.value)} />
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <Header name="product"/>
        <button className="flex items-center  bg-blue-500 hover:blue-700 text-gray-200 font-bold p-4 rounded"
        onClick={()=>setIsModalOpen(true)}>
          <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200"/>
          crear producto
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between">
        {isLoading?(
            <div>   
          Cragando.....
          </div>
        ):(
          products?.map((product)=>(
            <div  key={product.productId} className=" border shadow rounded-md p-4 max-w-full w-full mx-auto">
              <div className="flex flex-col items-center">
                <img src="https://images.pexels.com/photos/121191/pexels-photo-121191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt=""
                className="mb-3 rounded-2xl w-36 h-36" />
                <h3 className="text-lg text-gray-800 font-semibold">
                  {product.name}
                </h3>
                <p className="text-gray-800">
                  S/.{product.stockQuantity}</p>ht
              </div>
              {product.rating &&(
                <div className="flex items-center mt-2">
                  <Rating rating={product.rating}/>
                </div>
              )}

            </div>
          ))
        )}
      </div>
      <CreateProductModal
      isOpen={isModalOpen}
      onClose={()=>setIsModalOpen(false)}
      onCreate={handlerCreateProduct}/>
    </div>
    
  )
}
export default Products