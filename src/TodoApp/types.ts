// prettier-ignore
export interface Todo {
	id:   string
	done: boolean
	text: string
}

// prettier-ignore
export interface TodoApp {
	newTodo: Todo
	todos:   Todo[]
}

// prettier-ignore
export interface TodoDispatch {
	setTodoDone:  (id: string, done: boolean) => void
	setTodoText:  (id: string, text: string) => void
	resetNewTodo: () => void
	addNewTodo:   () => void
	removeTodo:   (id: string) => void
}
