// import logo from './logo.svg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar';
import Movies from './Component/Movies/Movies';
import TVseries from './Component/TV-Series/TVseries';
import MyList from './Component/MyList.js/MyList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='tv-series' element={<TVseries/>}/>
        <Route path='mylist' element={<MyList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
