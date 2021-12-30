export interface User {
    id: number,
    name: string,
    lastName: string,
    title: string,
    branchId: number,
    role: number,
    status: string,
    branch?: Branch,
}


export interface Branch{
    id:      number,
    name:    string,
    address: string,
    status:  string,
}


