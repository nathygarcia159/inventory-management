import { ChangeEvent, FormEvent, useState } from "react";
import { Rating } from "../(components)/Rating";
import { v4 } from "uuid";
import { Header } from "../(components)/Header";

type ProductFormaData={
    name:string;
    price:number;
    stockQuantity:number;
    rating:number;
}
type CreateProductModalProps={
    isOpen:boolean;
    onClose:()=>void;
    onCreate:(formData:ProductFormaData)=>void;
}

export const CreateProductModal = ({isOpen, onClose, onCreate}:CreateProductModalProps) => {
    const [formData, setFormData]=useState({
        productId:v4(),
        name:"",
        price:0,
        stockQuantity:0,
        rating:0,

    });
    const handlerChange = (e: ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:name ==="price"||name ==="stockQuantity"||name==="rating"
            ?parseFloat(value)
            :value,
        })
    };
    const hanldleSubmit =(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onCreate(formData);
        onClose();
    };
    if  (!isOpen) return null;
    const labelCssStyles="block text-sm font-medium  text-gray-700";
    const inputCssStyles= "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md"
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto  h-full w-full z-20">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <form action="" onSubmit={hanldleSubmit} className="mt-5"> 
            <Header name="Productos"/>
            <label htmlFor="" className={labelCssStyles}>
                Nombre Producto 
            </label>
            <input type="text" name="name" placeholder="Nombre" onChange={handlerChange}
            value={formData.name}
            className={inputCssStyles}
            required/>


            <label htmlFor="productPrice" className={labelCssStyles}>
                Precio Producto 
            </label>
            <input type="number" name="price" placeholder="Precio producto"  onChange={handlerChange}
            value={formData.price}
            className={inputCssStyles}
            required/>


<label htmlFor="stockQuantity" className={labelCssStyles}>
                    Cantidad del producto
                </label>
                <input type="number" name="stockQuantity" placeholder="Cantidad del producto" onChange={handlerChange} value={formData.stockQuantity} className={inputCssStyles} required/>




            <label htmlFor="rating" className={labelCssStyles}>
               Popularidad Producto 
            </label>
            <input type="number" name="rating" placeholder="pupularidad del producto" onChange={handlerChange}
            value={formData.rating}
            className={inputCssStyles}
            required/>


            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Crear</button>
            <button onClick={onClose} className="ml-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
                Cancelar
            </button>
            </form>
        </div>

    </div>
  )
}
