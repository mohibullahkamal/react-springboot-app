import React, { Component } from 'react';
import './App.css';
import { getAllStudents } from './client';

class App extends Component {

   state = { students: [] }

   componentDidMount () { this.fetchStudents(); }

   fetchStudents = () => {
      getAllStudents()
         .then(res => res.json()
         .then(stds => {
            console.log(stds)
            this.setState({ stds }); }));
   }

   render() {
      const { stds } = this.props;
      if (stds && stds.length) {
         stds.map((std, id) => {
            return ( <div> <h1>{std.studentId}</h1> </div> )
      })}
      return <h1>Students</h1> }
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