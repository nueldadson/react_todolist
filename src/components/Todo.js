import React, { useState } from "react";
import Todoform from "./Todoform";
// import Todolist from "./Todolist";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = (value) => {
		updateTodo(edit.id, value);

		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return (
			<Todoform
				edit={edit}
				onSubmit={submitUpdate}
			/>
		);
	}

	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={index}
		>
			<div
				key={todo.id}
				onClick={() => completeTodo(todo.id)}
			>
				{todo.text}
			</div>
			<div className="icons">
				<RiCloseCircleLine
					onClick={() => removeTodo(todo.id)}
					classname="delete-icon"
				/>
				<TiEdit
					onClick={() => setEdit({ id: todo.id, value: todo.text })}
					classname="edit-icon"
				/>
			</div>
		</div>
	));
}

export default Todo;