// const Students=()=>{
//     return(
//         <div>
//             students
//         </div>
//     )
// }
// export default Students

// src/components/Students.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);

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
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
        <div>
          <li key={student._id}>{student.firstname}</li>
          <li key={student._id}> {student.lastname}</li>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default Students;
