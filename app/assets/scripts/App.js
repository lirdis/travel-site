import '../styles/style.css';

if (module.hot) {
  module.hot.accept();
}

// React realted code goes here
import React from 'react'
import ReactDOM from 'react-dom'

// Import React Components
import MyAmazingComponent from './MyAmazingComponent'

ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example"))