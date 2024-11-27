'use client'
import { useGetProductsQuery } from "@/state/api"
import {Header} from "../(components)/Header"
import { DataGrid , GridColDef } from "@mui/x-data-grid"

const columns:GridColDef[]=[
    {   field: 'productId',
        headerName:"ID", 
        width:90
    },
    {   field:'name',  
        headerName:"nombre del producto",
        width:200
    },
    {   field:'price',
        headerName:"precio",
        width:100, type:"number",
        valueGetter:(value,row)=>`S/.${row.price}`
    },
    {   field:'rating', 
        headerName:"Popularidad", 
        width:110, type:"number",
        valueGetter:(value,row)=>(row.rating?row.rating:"N/A")
    },
    {   field:'stockQuantity', 
        headerName:"Cantidad de stock", 
        width:200, 
        type:"number"
    },
]


const page = () => {
    const {data:products,isError, isLoading}=useGetProductsQuery();

    if(isLoading){
        return <div className="py-4">Cargando...</div>
    }
    if (isError|| !products){
        return(
            <div className="text-center text-red-500 py-4">
                falla en traer informacion de productos
            </div>
        );
    }
    return(
        <div className="flex flex-col">
            <Header name="Inventario"/>
            <DataGrid
             rows ={products}
             columns={columns}
             getRowId={(row)=>row.productId}
             checkboxSelection
             className="bg-white shadow rounded-lg border border-gray-200 
             mt-5 !text-gray-700"
             />
        </div>
    )
  return (
    <div>page</div>
  )
}

export default page