import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return <div className={'p-5'}>
        Home Page
        <br/>
        <Button onClick={()=> navigate('users-list')}>
            Go to users
        </Button>
    </div>
}


export default  Home