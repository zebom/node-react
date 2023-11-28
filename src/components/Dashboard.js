// import { Link } from "react-router-dom";
// import './Dashboard.css';

// const Dashboard=()=>{
//     return(
//         <div>
//             Dashboard
//             <li>
//                 <Link to="/PatchStudent">PatchStudent</Link>
//                </li>
//                <li>
//                 <Link to="/DelStudent">DeleteStudent</Link>
//                </li>
//                <li>
//                 <Link to="/AddStudent">Add Student</Link>
//                </li>
//                <li>
//                 <Link to="/Students"> Students</Link>
//                </li>
//         </div>
//     )
// }
// export default Dashboard;

import { Link } from "react-router-dom";
// import './Dashboard.css';  // Import a CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <ul className="dashboard-links">
                <li>
                    <Link to="/Students">Students</Link>
                </li>
                <li>
                    <Link to="/AddStudent">Add Student</Link>
                    
                </li>
                <li>
                     <Link to="/PatchStudent/:id">Patch Student</Link>
                     
                </li>
                <li>
                     <Link to="/DelStudent/:id">Delete Student</Link>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;
