// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { getAllStudents } from './client';

class App extends Component {
// function App() {
   render() {
      getAllStudents()
      .then(res => res.json()
      .then(students => console.log(students)
      ))

      return <h1>Hello World Spring Boot and React!!</h1>
   }
}

export default App;
