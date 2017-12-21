import React, { Component } from "react";
import "../App.css";
import MainApp from "./MainApp";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Test Photo APP</h1>
				</header>
				<MainApp />
			</div>
		);
	}
}

export default App;
