import React from "react";
import "./App.css";
// import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";

export default class App extends React.Component {
	render() {
		return (
			<div className="todo-app">
				{/* <h1>Todo React App</h1> */}
				<Todolist />
			</div>
		);
	}
}
