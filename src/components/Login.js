// import logo from './logo.jpg';
import { Button,Form} from "react-bootstrap";
import axios from "axios"
import { useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";


const Login=()=>{
    // const [email, setEmail]=useState({
    //     email: "",
    //     password: ""
     
    // })

    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword =(e)=>{
        setPassword( e.target.value)
    }
    const saveStudent=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/user/login', {email, password})
        .then(res=>{
            toast.success('logged in successfully' ,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:3000,
            });
            window.location.href ='/Dashboard';
            // setLogin(login);
        })
        .catch(err => {
            toast.error('There is an error with your input',{
                position:toast.POSITION.BOTTOM_RIGHT,
                autoClose:3000, 
            });
            // console.log(err.message)
        })
    }
    return(
        <div> 
            <div className="lk2">
                <h1> Login</h1>
            <Form onSubmit={saveStudent} className="form">
            <Form.Group className="input">
                    <Form.Control type="text" name="email" onChange={handleEmail} value={email} placeholder="EMAIL" required/>     
            </Form.Group><br></br>

                <Form.Group className="input">
                    <Form.Control type="password" name="password"  onChange={handlePassword} value={password} placeholder="Password" required/>  
                </Form.Group> <br></br>

               <Form.Group>
                    <Button variant="primary" type="submit" className="btn">Log in</Button>
                    <ToastContainer/>
                </Form.Group>
                
                </Form>
                </div>
            
        </div>
    )
}
export default Login;