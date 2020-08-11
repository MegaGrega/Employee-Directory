import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm"
import EmployeeList from "./components/EmployeeList"


function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <EmployeeList></EmployeeList>
      </div>
    </Router>
  );
}

export default App;
