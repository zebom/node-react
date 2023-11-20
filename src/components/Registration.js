
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
  return (
    <div className='lk1'>
        
      
       <h2>Register</h2> 
    <Form className='form1'>
    <Form.Group className="input" >
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder=" Enter name" required /> 
      </Form.Group>

      <Form.Group className="input" >
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder=" Enter name" required /> 
      </Form.Group>

      <Form.Group className="input" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" /> 
      </Form.Group>

      <Form.Group className="input">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required /> 
      </Form.Group>

      <Form.Group className="input">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="input">
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
        </Form.Group>

      <br></br>
     <div className='button'>
      <Button variant="primary" type="submit" >
        register
      </Button>
      </div>
    </Form>
    </div>
  );
}

export default Register;