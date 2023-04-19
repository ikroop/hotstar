import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Sample from './components/sample';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/s" element={< Sample/>}></Route>  
          <Route path="/home" element={< Home/>}></Route>
          <Route path='/detail/:id' element={< Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
