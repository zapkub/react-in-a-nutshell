import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'glamor'

const TodoList = React.createClass<any, any>({
    getInitialState() {
        return {
            todos: [
                {
                    title: 'Finnish this presentation'
                }
            ]
        }
    },
    render() {
        return (
            <ul>
            {
                this.state.todos.map(
                    (todo, index) => <li key={index}>{todo.title}</li>
                )
            }
            </ul>
        )
    }
})

export default TodoList;