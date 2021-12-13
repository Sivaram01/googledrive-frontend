import React from 'react'
import './App.css';
import Header from './Header.1';
import AddIcon from '@mui/icons-material/Add';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './login';
// import { useState} from 'react';


export default function App() {
  return (
     <div className="container-section">   
        <Switch>
        <Route  exact path="/">
        <Header/>
        <Dashboard/>
        </Route> 
       <Route path="/api/sign-up">
       <Register/>
      </Route> 
       <Route path="/api/login">
       <Login/>
      </Route> 
      </Switch>
     </div>
  );
}


function Dashboard(){
    const history = useHistory();
   return(
     <div className="dashboard">
        <button  className = "m-5 btn btn-success"><AddIcon/> Add File</button>
        <button  onClick={()=> {
           history.push("/api/sign-up")
        }} className = "m-5 btn btn-primary"><PersonAddAltIcon/> Sign up</button>
        <button onClick={()=> {
           history.push("/api/login")}} className = "m-5 btn btn-primary"><PersonAddAltIcon/> Login
           </button>

     </div>
   )
}


