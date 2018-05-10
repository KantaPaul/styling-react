import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/App';
import 'normalize.css/normalize.css';
import './styles/style.scss';


let Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  );
}

let template = (
  <div>
    <h1>Hello</h1>
    <h2>Content</h2>
  </div>
);
  
let app = document.getElementById('app');

ReactDOM.render(<MyApp />, app);

// ReactDOM.render(<Layout content={template} />, app);

// ReactDOM.render((
// <Layout>
//   <div>
//     <h1>Hello</h1>
//     <h2>Content</h2>
//   </div>
// </Layout>), app);


// class OldSyntax {
//     constructor() {
//         this.name = "ABC"
//     }
// }
// let oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// --------------

// class NewSyntax {
//     name = "DEF"
// }
// let newSyntax = new NewSyntax();
// console.log(newSyntax)