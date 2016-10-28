import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'glamor';

import TodoInput from './TodoInput'; 


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

    createNewTodo(title) {
        this.setState({
            todos: [...this.state.todos, {title}]
        });
    },

    render() {
        return (
            <div>
                <TodoInput onSubmit={this.createNewTodo} />
                <ul>
                    {
                        this.state.todos.map(
                            (todo, index) => <li key={index}>{todo.title}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
})

export default TodoList;