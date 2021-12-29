import {User} from '../interfaces/Users'
const base = 'http://localhost:18080/users'
const getUrl = (path: string) => `${base}`

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

export const getUsers = () => {
    return request<User[]>(getUrl(''), {headers: headers})
}

 const getUser = () => {}
 const createUser = () => {}
 const deleteUser = ()=> {}
 const updateUser = ()=> {}

