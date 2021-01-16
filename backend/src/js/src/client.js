import fetch from 'unfetch';

// export const getAllStudents = () => fetch('http://localhost:8080/students');

export const getAllStudents = () => fetch('/students');   //added proxy in package.json... therefore did not add "http://localhost:8080"
