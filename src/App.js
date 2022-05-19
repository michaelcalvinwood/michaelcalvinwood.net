import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      {/* <Route 
       path="/" 
       element={<Main />} /> */}
      <Route 
       path="/" 
       element={<Portfolio />} />
      <Route 
       path="/portfolio" 
       element={<Portfolio />} />
     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
