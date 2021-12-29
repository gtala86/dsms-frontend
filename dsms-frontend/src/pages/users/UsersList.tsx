import React, {useEffect, useState} from "react";
import {getUsers} from "../../services/UserService";
import DataTable from "react-data-table-component";
import {User} from "../../interfaces/Users";

const UserList = ()=> {
    const getColumns = () =>  [
        {
            name: 'id',
            selector:( row  : User) => row.id,
            sortable: true,
        },
        {
            name: 'role',
            selector:( row  : User) => row.role,
            sortable: true,
        },
        {
            name: 'branch',
            selector:( row  : User) => row.branch && row.branch.name,
            sortable: true,
        },
        {
            name: 'name',
            selector:( row  : User) => row.name,
            sortable: true,
        },
        {
            name: 'LastName',
            selector:( row  : User) => row.lastName,
            sortable: true,
        },
        {
            name: 'Status',
            selector:( row  : User) => row.status,
            sortable: true,
        },
    ];
    const [users, setUsers] = useState(new Array<User>())

    useEffect(()=>{
        getUsers().then(users => setUsers(users))
    }, [])

    return (
        <DataTable
            columns={getColumns()}
            data={users}
        />
    );
}

export default UserList;
