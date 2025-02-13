import { Link } from "react-router-dom";


const AdminPanel = () => {
    return ( 
        <div className="admin-panel">
            <h1 className="">Admin Panel</h1>
            <button> <Link to='/admin-login'>Admin Login</Link></button>
            <button> <Link to='/admin-signup'>Admin Register</Link></button>
        </div>
     );
}
 
export default AdminPanel;