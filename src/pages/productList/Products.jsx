import "./products.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {productsRows} from '../../dummyData';
import { useState } from "react";

export const Products = () => {
    const [data,SetData]=useState(productsRows)
    const handleClick=(id)=>{
        SetData(data.filter((item)=>item.id!==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 ,renderCell:(params)=>{
            return (
            <div className="userListUser">
                <img className="UserImg" src={params.row.img} alt="img Not Found" />
                {params.row.name}
            </div>)
        }},
        { field: 'stock', headerName: 'Stock', width: 130 },
        {field: 'status',headerName: 'Status',width: 90, },
        { field: 'price', headerName: 'Price', width: 160, },
        { field: 'action', headerName: 'Action', width: 150,renderCell:(params)=>{
            return(
                <>
                <Link to={'/product/'+params.row.id}>
                <button className="userbtnEdit">Edit</button>
                </Link>
                <DeleteOutline className="userbtnDelete" onClick={()=>handleClick(params.row.id)}/>
                </>
            )   
        } },
    ];

  return (
    <div className="productsList">
           <DataGrid
  disableSelectionOnClick   
                rows={data}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
    </div>
  )
}
