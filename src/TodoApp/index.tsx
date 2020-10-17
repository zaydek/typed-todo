import * as types from "./types"

import React from "react"
import methods from "./methods"
import useMethods from "use-methods"
import { v4 as uuidv4 } from "uuid"

// prettier-ignore
interface TodoProps {
	todo:     types.Todo
	dispatch: types.TodoDispatch
}

function Todo({ todo, dispatch }: TodoProps) {
	return (
		<>
			<input
				type="checkbox"
				checked={todo.done}
				onChange={e => {
					dispatch.setTodoDone(todo.id, e.target.checked)
				}}
			/>
			<input
				type="text"
				value={todo.text}
				onChange={e => {
					dispatch.setTodoText(todo.id, e.target.value)
				}}
			/>
		</>
	)
}

export default function App() {
	const [state, dispatch] = useMethods(methods, {
		newTodo: {
			id: uuidv4(),
			done: false,
			text: "Hello, world!",
		},
		todos: [] as types.Todo[],
	})

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					dispatch.addNewTodo()
				}}
			>
				<Todo todo={state.newTodo} dispatch={dispatch} />
				{/* prettier-ignore */}
				<button type="submit">
					{"+"}
				</button>
			</form>
			{state.todos.map(todo => (
				<div key={todo.id}>
					{/* prettier-ignore */}
					<Todo
						todo={todo}
						dispatch={dispatch}
					/>
					{/* prettier-ignore */}
					<button onClick={() => dispatch.removeTodo(todo.id)}>
						{"-"}
					</button>
				</div>
			))}

			{/* prettier-ignore */}
			<pre>
				{JSON.stringify(state, null, 2)}
			</pre>
		</div>
	)
}
