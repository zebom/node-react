import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Students = () => {
  const [students, setStudents] = useState([]);
  // const navigate= useNavigate();
  // const deleteStudent = (id, firstname) => {
  //   if (window.confirm(`Are you sure you want to delete ${firstname}?`)) {
  //     axios.delete(`http://localhost:4000/students/${id}`)
  //       .then(() => {
  //         // Use useHistory to push to the home page after deletion
  //         navigate('/DelStudents');
  //       })
  //       .catch((error) => {
  //         console.error('Error deleting student:', error);
  //       });
  //   } else {
  //     // Do nothing if the user cancels the deletion
  //   }
  // };

//          this enables it to delete on the same page of students without going to another component

  // const deleteStudent = (id, firstname) => {
  //   if (window.confirm(`Are you sure you want to delete ${firstname}?`)) {
  //     axios.delete(`http://localhost:4000/students/${id}`)
  //       .then((response) => {
  //         if (Array.isArray(students)) {
  //           // If the response is an object, find and remove the deleted student
  //           if (typeof response.data === 'object') {
  //             const updatedStudents = students.filter(student => student._id !== id);
  //             setStudents(updatedStudents);
  //           } else if (Array.isArray(response.data)) {
  //             // If the response is an array, update the state with the new list of students
  //             setStudents(response.data);
  //           } else {
  //             console.error('Invalid response format:', response.data);
  //           }
  //         } else {
  //           console.error('Invalid state:', students);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error deleting student:', error);
  //       });
  //   } else {
  //     // Do nothing if the user cancels the deletion
  //   }
  // };
  
  useEffect(() => {
    // Fetch students from the server when the component mounts
    axios.get('http://localhost:4000/students')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []); // The empty dependency array ensures the effect runs once after the initial render
 
  return (
    <div className='stulists'>
  <h2>Student Lists</h2>
  <table className='table '>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student) => (
        <tr key={student._id}>
          <td>{student.firstname}</td>
          <td>{student.lastname}</td>
          <td className='link'><Link to={`/PatchStudent/${student._id}`}>update</Link></td>
          {/* <td onClick={()=>deleteStudent(student._id, student.firstname)}>delete</td> */}
          <td className='link'><Link to={`/DelStudents/${student._id}`}>delete</Link></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default Students;
// <div>
    //   <h2>Student List</h2>
    //   <ul>
    //     {students.map((student) => (
    //     <div>
    //       <li key={student._id}>{student.firstname}</li>
    //       <li key={student._id}> {student.lastname}</li>
    //     </div>
    //     ))}
    //   </ul>
    // </div>
