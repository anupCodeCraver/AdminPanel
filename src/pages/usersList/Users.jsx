import "./users.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {userRows} from '../../dummyData';
import { useState } from "react";

export default function Users() {
    const[data,SetData]=useState(userRows);
    
const handleClick=(id)=>{
    SetData(data.filter((item)=>item.id!==id))
}
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 130 ,renderCell:(params)=>{
            return (
            <div className="userListUser">
                <img className="UserImg" src={params.row.avatar} alt="img Not Found" />
                {params.row.username}
            </div>)
        }},
        { field: 'email', headerName: 'Email', width: 130 },
        {field: 'status',headerName: 'Status',width: 90, },
        { field: 'transaction', headerName: 'Transaction Volume', width: 160, },
        { field: 'action', headerName: 'Action', width: 150,renderCell:(params)=>{
            return(
                <>
                <Link to={'/user/'+params.row.id}>
                <button className="userbtnEdit">Edit</button>
                </Link>
                <DeleteOutline className="userbtnDelete" onClick={()=>handleClick(params.row.id)}/>
                </>
            )   
        } },
    ];

   
    return (
        <div className='userContainer'>
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
