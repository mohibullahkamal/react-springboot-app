import React, { Component } from 'react';
import './App.css';
import { getAllStudents } from './client';
import { Home } from './home';

class App extends Component {

   num = 10;
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
      return (
         <div>
            <Home num={this.num}></Home>
            <h1>Students</h1>
         </div>
      )
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