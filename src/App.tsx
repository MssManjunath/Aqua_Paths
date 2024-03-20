import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import "leaflet/dist/leaflet.css";
import PathFinder from './components/pathFinder';
import GoogleSignIn from './components/GoogleSignIn';
import NewsComponent from './components/newsComponent';
import Nav from './components/nav';
import {loadPortData} from "../src/Services/portService";
import {  useDispatch } from 'react-redux';
import Home from './components/home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const dispatch: any = useDispatch();
  useEffect(()=>{
    dispatch(loadPortData());
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/getPath' element = {<PathFinder/>}/>
      </Routes>
    </BrowserRouter>
      <Home/>
    </div>
  )
}

export default App;
