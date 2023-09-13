import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/layout/landing';
import Admin from './components/admin/admin';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </>
  );
}

export default App;
