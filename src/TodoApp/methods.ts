import * as types from "./types"

import { v4 as uuidv4 } from "uuid"

export default (state: types.TodoApp) => ({
	setTodoDone(id: string, done: boolean) {
		let todo: types.Todo
		if (id === state.newTodo.id) {
			todo = state.newTodo
		} else {
			const found = state.todos.find(each => each.id === id)
			if (!found) {
				throw new Error(`no such todo; id=${id}`)
			}
			todo = found
		}
		todo.done = done
	},
	setTodoText(id: string, text: string) {
		let todo: types.Todo
		if (id === state.newTodo.id) {
			todo = state.newTodo
		} else {
			const found = state.todos.find(each => each.id === id)
			if (!found) {
				throw new Error(`no such todo; id=${id}`)
			}
			todo = found
		}
		todo.text = text
	},
	resetNewTodo() {
		state.newTodo.id = uuidv4()
		state.newTodo.done = false
		state.newTodo.text = ""
	},
	addNewTodo() {
		if (!state.newTodo.text) {
			// No-op
			return
		}
		state.todos.unshift({ ...state.newTodo })
		this.resetNewTodo()
	},
	removeTodo(id: string) {
		const x = state.todos.findIndex(each => each.id === id)
		if (x === -1) {
			throw new Error(`no such todo; id=${id}`)
		}
		state.todos.splice(x, 1)
	},
})
