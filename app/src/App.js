import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/layout/landing';
import Admin from './components/admin/admin';
import Login from './components/login/login';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function App() {
  const [authenticated, setauthenticated] = useState(null);

  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin-login" element={<Login />}/>
    </Routes>
    </>
  );
}

export default App;
