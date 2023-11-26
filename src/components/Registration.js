
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function Register() {
//   return (
//     <div className='lk1'>
        
      
//        <h2>Register</h2> 
//     <Form className='form1'>
//     <Form.Group className="input" >
//         <Form.Label>FirstName</Form.Label>
//         <Form.Control type="text" placeholder=" Enter name" required /> 
//       </Form.Group>

//       <Form.Group className="input" >
//         <Form.Label>LastName</Form.Label>
//         <Form.Control type="text" placeholder=" Enter name" required /> 
//       </Form.Group>

//       <Form.Group className="input" >
//         <Form.Label>Username</Form.Label>
//         <Form.Control type="text" placeholder="Enter username" /> 
//       </Form.Group>

//       <Form.Group className="input">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" required /> 
//       </Form.Group>

//       <Form.Group className="input">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" required />
//       </Form.Group>
//       <Form.Group className="input">
//           <Form.Label>Gender</Form.Label>
//           <div>
//             <Form.Check 
//               inline 
//               label="Male" 
//               type="radio" 
//               name="gender" 
//               id="male" 
//             />
//             <Form.Check 
//               inline 
//               label="Female" 
//               type="radio" 
//               name="gender" 
//               id="female" 
//             />
//               </div>
//         </Form.Group>

//       <br></br>
//      <div className='button'>
//       <Button variant="primary" type="submit" >
//         register
//       </Button>
//       </div>
//     </Form>
//     </div>
//   );
// }

// export default Register;
// import logo from './logo.jpg';
import { Button,Form} from "react-bootstrap";
import axios from "axios"
import { useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";


const Register=()=>{
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
        axios.post('http://localhost:4000/user', {email, password})
        .then(res=>{
            toast.success('logged in successfully' ,{
                position:toast.POSITION.TOP_CENTER,
                autoClose:3000,
            });
            window.location.href ='/Login';
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
                <h2> Register</h2>
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
export default Register;