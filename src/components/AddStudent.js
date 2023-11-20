import { useState} from "react";
import axios from 'axios'
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";

const AddStudent=()=>{

    const [data, setData]=useState({
        firstname: "",
        lastname: "",
        // gender: ""
    })
    const handleChange =(e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    const saveStudent=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/students', data)
        .then(res=>{
            toast.success('New Student added successfully' ,{
                position:toast.POSITION.TOP_RIGHT,
                autoClose:3000,
            });
            setData(data);
        })
        .catch(err => {
            toast.error('There is an error with your input',{
                // position:toast.POSITION.TOP_RIGHT,
                // autoClose:3000, 
                
            });
            console.log(err.message)
        })
    }
    return(
        <div>
            <div className="lk2">
                <h2> Add Student</h2>
            <Form   onSubmit={saveStudent} className="form2">
            <Form.Group className="input">
                    <Form.Control type="text" name="firstname"  onChange={handleChange}  value={data.firstname}  placeholder="enter firstname" required/>     
            </Form.Group><br></br>

                <Form.Group className="input">
                    <Form.Control type="text" name="lastname" onChange={handleChange}  value={data.lastname} placeholder="enter lastname" required/>  
                </Form.Group> <br></br>
                <br></br>
                {/* <Form.Group className="input3">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check 
              inline 
              label="Male" 
              type="radio" 
              name="gender" 
              id="male" 
            />
            <Form.Check 
              inline 
              label="Female" 
              type="radio" 
              name="gender" 
              id="female" 
            />
              </div>
        </Form.Group> */}

               <Form.Group>
                    <Button variant="primary" type="submit" className="btn">Submit</Button>
                </Form.Group>
                <ToastContainer/>
                
                </Form>
                </div>
        </div>
    )
}
export default AddStudent