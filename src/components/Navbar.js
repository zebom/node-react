import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
    <nav className="nav">
       <Link to="/">home</Link>
        <ul>
            <li>
              <Link to="/Registration">register</Link>
            </li>
            <li>
             <Link to="/Login">login</Link>
               </li>
               <li>
                <Link to="/AddStudent">Add Student</Link>
               </li>
               <li>
                <Link to="/Students"> Students</Link>
               </li>
               <li>
                <Link to="/Dashboard"> Dashboard</Link>
               </li>
               <li>
                <Link to="/PatchStudent">PatchStudent</Link>
               </li>
               <li>
                <Link to="/DelStudent">DeleteStudent</Link>
               </li>
           
        </ul>
    </nav>
    )
}
export default Navbar;

