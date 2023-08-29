import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/layout/landing';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    </>
  );
}

export default App;
