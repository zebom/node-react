import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


const DelStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const navigate= useNavigate();


  useEffect(() => {
    axios.get(`http://localhost:4000/students/${id}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  }, [id]);

  const deleteStudent = () => {
    if (window.confirm(`Are you sure you want to delete ${student.firstname}?`)) {
      axios.delete(`http://localhost:4000/students/${id}`)
        .then(() => {
          // Redirect back to the list after deletion
         navigate('/Students')
        })
        .catch((error) => {
          console.error('Error deleting student:', error);
        });
    } else {
      // Do nothing if the user cancels the deletion
    }
  };

  return (
    <div className='delpage'>
         <h3>delete student record:</h3>
    <div className='delpage1'>
       
      {student ? (
        <div>
          <h4>Student Details</h4>
          <p>First Name: {student.firstname}</p>
          <p>Last Name: {student.lastname}</p>
          <button onClick={deleteStudent}>Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default DelStudent;

// import { useState} from "react";
// import axios from 'axios'
// import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer,toast } from "react-toastify";

// const DelStudent=()=>{

//     const [data, setData]=useState({
//         firstname: "",
//         lastname: "",
//         // gender: ""
//     })
//     const handleChange =(e)=>{
//         setData({...data, [e.target.name]: e.target.value})
//     }
//     const saveStudent=(e)=>{
//         e.preventDefault()
//         axios.delete('http://localhost:4000/students', data)
//         .then(res=>{
//             toast.success('Student deleted successfully' ,{
//                 position:toast.POSITION.TOP_RIGHT,
//                 autoClose:3000,
//             });
//             setData(data);
//         })
//         .catch(err => {
//             toast.error('There is an error with your input',{
//                 // position:toast.POSITION.TOP_RIGHT,
//                 // autoClose:3000, 
                
//             });
//             console.log(err.message)
//         })
//     }
//     return(
//         <div>
//             <div className="lk2">
//                 <h2> Delete Student</h2>
//             <Form   onSubmit={saveStudent} className="form2">
//             <Form.Group className="input">
//                     <Form.Control type="text" name="firstname"  onChange={handleChange}  value={data.firstname}  placeholder="enter firstname" required/>     
//             </Form.Group><br></br>

//                 <Form.Group className="input">
//                     <Form.Control type="text" name="lastname" onChange={handleChange}  value={data.lastname} placeholder="enter lastname" required/>  
//                 </Form.Group> <br></br>
//                 <br></br>
//                 {/* <Form.Group className="input3">
//           <Form.Label>Gender</Form.Label>
//           <div>
//             <Form.Check 
//                inline 
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
//         </Form.Group> */}

//                <Form.Group>
//                     <Button variant="primary" type="submit" className="btn">Delete</Button>
//                 </Form.Group>
//                 <ToastContainer/>
                
//                 </Form>
//                 </div>
//         </div>
//     )
// }
// export default DelStudent