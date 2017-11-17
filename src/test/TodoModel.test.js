import {TodoListModel} from "../models/TodoListModel"

describe("TodoStore", () => {
    it("creates new todos", () => {
        const store = new TodoListModel
        store.addTodo("todo1")
        store.addTodo("todo2")
        expect(store.todos.length).toBe(2)
        expect(store.todos[0].value).toBe("todo1")
        expect(store.todos[1].value).toBe("todo2")
    })
})