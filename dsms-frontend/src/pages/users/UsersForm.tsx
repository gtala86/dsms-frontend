import {Button, FloatingLabel, Form} from "react-bootstrap";
import {createUser} from "../../services/UserService";
import {User} from "../../interfaces/Users";
import {ChangeEvent, useState} from "react";


function setProperty<K extends keyof User>(obj: User, key: K, value: User[K]) {
    obj[key] = value;
}


const UsersForm = () => {
    const [user, setUser] = useState(({} as any) as User)
    function handleInputChangeUser<K extends keyof User>(key: K,  event : any) {
        const target = event.target;
        const inputValue = target.type === 'checkbox' ? target.checked : target.value;
        let newUser = {...user};
        setProperty(newUser,key, inputValue)
        setUser(newUser)
    }

    const saveHandlerClick =  (user: User)=> {
         createUser(user).then(response => response.json())
             .then(data => {
                 alert("User created")
             })
             .catch((error) => {
                 console.error('Error:', error);
             });
    }

    return <div style={{padding: '100px'}}>

        <h1>
            User Form
        </h1>

        <Form >
            <>
                <FloatingLabel controlId="name"  label="Name" className="mb-3">
                    <Form.Control type="text" placeholder="name" value={user.name} onChange={ (e: any) => handleInputChangeUser("name",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="position"  label="Position" className="mb-3">
                    <Form.Control type="text" placeholder="position" value={user.position} onChange={ (e: any) => handleInputChangeUser("position",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="department"  label="Department" className="mb-3">
                    <Form.Control type="text" placeholder="department" value={user.department} onChange={ (e: any) => handleInputChangeUser("department",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="street"  label="Street" className="mb-3">
                    <Form.Control type="text" placeholder="street" value={user.street} onChange={ (e: any) => handleInputChangeUser("street",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="streetNumber"  label="Street Number" className="mb-3">
                    <Form.Control type="text" placeholder="streetNumber" value={user.streetNumber} onChange={ (e: any) => handleInputChangeUser("streetNumber",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="zipCode"  label="Zip Code" className="mb-3">
                    <Form.Control type="text" placeholder="zipCode" value={user.zipCode} onChange={ (e: any) => handleInputChangeUser("zipCode",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="city"  label="City" className="mb-3">
                    <Form.Control type="text" placeholder="city" value={user.city} onChange={ (e: any) => handleInputChangeUser("city",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="phone"  label="Phone" className="mb-3">
                    <Form.Control type="text" placeholder="phone" value={user.phone} onChange={ (e: any) => handleInputChangeUser("phone",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="mobilePhone"  label="Mobile Phone" className="mb-3">
                    <Form.Control type="text" placeholder="mobilePhone" value={user.mobilePhone} onChange={ (e: any) => handleInputChangeUser("mobilePhone",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="fax"  label="Fax" className="mb-3">
                    <Form.Control type="text" placeholder="fax" value={user.fax} onChange={ (e: any) => handleInputChangeUser("fax",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="email"  label="Email" className="mb-3">
                    <Form.Control type="email" placeholder="email" value={user.email} onChange={ (e: any) => handleInputChangeUser("email",  e)} />
                </FloatingLabel>
                <FloatingLabel controlId="status"  label="Status" className="mb-3">
                    <Form.Control type="text" placeholder="status" value={user.status} onChange={ (e: any) => handleInputChangeUser("status",  e)} />
                </FloatingLabel>
            </>
            <Button onClick={() => saveHandlerClick(user)}>
                Save
            </Button>
        </Form>
    </div>
}


export default  UsersForm