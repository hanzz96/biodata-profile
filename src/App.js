import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
class App extends React.Component {
  render(){
	  return (
		<div className="App">
		  <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			  Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			  className="App-link"
			  href="https://threejs.org/"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  Hello ThreeJS!
			</a>
		  </header>
		</div>
	  );
  }
  
}

export default App;
