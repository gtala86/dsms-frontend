import {Button, Form} from "react-bootstrap";


const UsersForm = () => {
    return <div>
        <Form style={{padding: '100px'}}>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name </Form.Label>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="position">
                <Form.Label>Position </Form.Label>
                <Form.Control type="text" placeholder="Position" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="department">
                <Form.Label>Department </Form.Label>
                <Form.Control type="text" placeholder="department" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="street">
                <Form.Label>Street </Form.Label>
                <Form.Control type="text" placeholder="street" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="streetNumber">
                <Form.Label>Street Number </Form.Label>
                <Form.Control type="text" placeholder="street number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="zipcode">
                <Form.Label>Zip Code </Form.Label>
                <Form.Control type="text" placeholder="Zip Code" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
}


export default  UsersForm