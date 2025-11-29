import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
       <main className='main-content'>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
       </Routes>
       </BrowserRouter>
       </main>
    </>
  );
}

export default App;
