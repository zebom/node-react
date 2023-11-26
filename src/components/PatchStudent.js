import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PatchStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/students/${id}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  }, [id]);

  const updateStudent = (updatedData) => {
    axios.patch(`http://localhost:4000/students/${id}`, updatedData)
      .then(() => {
        // Use useNavigate to navigate back to the Students page after updating
        navigate('/Students');
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
  };

  return (
    <div className='delpage'>
       <h3>Update Student:</h3>
      {student ? (
        <div className='delpage1'>
         
          {/* Your form for updating student data */}
         
          <form onSubmit={(e) => {
            e.preventDefault();
            // Assuming you have a form with fields to update student data
            const formData = new FormData(e.target);
            const updatedData = Object.fromEntries(formData.entries());
            updateStudent(updatedData);
          }}>
            {/* Your form fields go here */}
            {/* Example: */}
            <label>First Name:</label><br></br>
            <input type="text" name="firstname" defaultValue={student.firstname} />
            <br />
            <label>Last Name:</label><br></br>
            <input type="text" name="lastname" defaultValue={student.lastname} />
            <br />
            {/* ... other form fields */}
            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PatchStudent;
