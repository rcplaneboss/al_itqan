import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AppBody from './AppBody';
import Register from './Register';
import NotFound from './NotFound';
import SignUp from './SignUp';
import './App.css';
import LogIn from './LogIn';
import Dashboard from './Dashboard';
import AdminPanel from './AdminPanel';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="app-body">
          <Routes>
            <Route exact path="/" element={<AppBody />} />
            <Route  path="/register" element={<Register />} />
            <Route  path="/admin-login" element={<LogIn />} />
            <Route  path="/admin-signup" element={<SignUp />} />
            <Route  path="/admin-panel" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
