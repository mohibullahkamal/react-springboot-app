import React, { Component } from 'react';
import './App.css';
import { getAllStudents } from './client';

class App extends Component {

   state = {
      students: []
   }

   fetchStudents = () => {
      getAllStudents()
         .then(res => res.json()
         .then(students => {
            this.setState({
               students
            })
         }
      ));
   }

// function App() {
   render() {
      // getAllStudents()
      // .then(res => res.json()
      // .then(students => console.log(students)
      // ));
      return <h1>Hello World Spring Boot and React!!</h1>
   }
}

export default App;
