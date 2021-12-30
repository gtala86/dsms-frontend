import {User} from '../interfaces/Users'
const base = 'http://localhost:18080/persons'
const getUrl = (path: string) => path ? `${base}/${path}` : base

enum Method {
    POST = "POST",
    GET = "GET",
    DELETE = "DELETE",
    PUT = "PUT",
}
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin','http://localhost:3000');

function request<User>(
    url: string,
    config: RequestInit = {}
): Promise<User> {
    return fetch(url, config)
        .then((response) => response.json())
        .then((data) => data as User);
}


const postRequest = (user : User, id?: string)=> {
    return fetch(getUrl(id ? id : ''), {
        method: id ? Method.PUT :  Method.POST,
        headers: headers,
        body: JSON.stringify(user),
    })
}

export const getUsers = () => {
    const init = {headers: headers}
    return request<User[]>(getUrl(''), init)
}

export const getUser = (id: string) => {
     return request<User[]>(getUrl(id), {headers: headers})
 }
export const createUser = (user : User) => {
     return  postRequest(user)
 }

export const deleteUser = (id: string )=> {
    const init = {headers: headers, method : Method.DELETE}
     return fetch(getUrl(id), init)
 }

export  const updateUser = (newUser: User, id: string)=> {
    return  postRequest(newUser, id)
 }

