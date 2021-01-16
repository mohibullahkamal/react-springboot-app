import React, { Component } from 'react';
import './App.css';
import { getAllStudents } from './client';

class App extends Component {

   state = {
      students: []
   }

   componentDidMount () {
      this.fetchStudents();
   }

   fetchStudents = () => {
      getAllStudents()
         .then(res => res.json()
         .then(stdts => {
            this.setState({ stdts });
         }));
   }

   render() {
      this.fetchStudents;
      return <h1>Hello World Spring Boot and React!!</h1>
   }
}

export default App;





// function App() {
   // render() {
      // getAllStudents()
      // .then(res => res.json()
      // .then(students => console.log(students)
      // ));
//    }
// }