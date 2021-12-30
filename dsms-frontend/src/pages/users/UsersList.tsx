import React, {useEffect, useState} from "react";
import {deleteUser, getUsers} from "../../services/UserService";
import DataTable from "react-data-table-component";
import {User} from "../../interfaces/Users";
import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const UserList = ()=> {
    const navigate = useNavigate();

    const  clickEditHandler = ()=> {
        navigate('/users-form')
    }

    const clickDeleteHandler = (user: User)=> {
        const {id} = user
        deleteUser(id ? id.toString() : '').then( r => {
            alert("User deleted")
        })


    }

    const getColumns = () =>  [
        {
            name: 'id',
            selector:( row  : User) => row.id,
            sortable: true,
        },
        {
            name: 'name',
            selector:( row  : User) => row.name,
            sortable: true,
        },
        {
            name: 'position',
            selector:( row  : User) => row.position,
            sortable: true,
        },
        {
            name: 'department',
            selector:( row  : User) => row.department,
            sortable: true,
        },
        {
            name: 'street',
            selector:( row  : User) => row.street,
            sortable: true,
        },
        {
            name: 'cty',
            selector:( row  : User) => row.city,
            sortable: true,
        },
        {
            name: 'phone',
            selector:( row  : User) => row.phone,
            sortable: true,
        },
        {
            name: 'email',
            selector:( row  : User) => row.email,
            sortable: true,
        },
        {
            name: 'status',
            selector:( row  : User) => row.status,
            sortable: true,
        },
        {
            name: 'Edit',
            sortable: true,
            cell : () => <Button  className={'btn btn-primary'} onClick={clickEditHandler}>Edit</Button>,
            button: true
        },
        {
            name: 'Delete',
            cell : ( row  : User) => <Button className={'btn btn-danger'} onClick={ () => clickDeleteHandler(row)}>Delete</Button>,
            sortable: true,
        },
    ];
    const [users, setUsers] = useState(new Array<User>())

    useEffect(()=>{
        getUsers().then(users => setUsers(users))
    }, [])

    const clickCreateHandler = () => {
        navigate('/users-form')
    }

    return (
        <div className={'p-5'}>
            <div>
                <Button className={'btn btn-success'} onClick={clickCreateHandler}>Create</Button>
            </div>
        <DataTable
            columns={getColumns()}
            data={users}
        />
        </div>
    );
}

export default UserList;
