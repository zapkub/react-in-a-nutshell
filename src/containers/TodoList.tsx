import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'glamor';

import TodoInput from './TodoInput'; 
import TodoItem from '../components/TodoItem';
import { Todo } from '../components/TodoItem';


const TodoList = React.createClass<any, {todos: Todo[]}>({

    getInitialState() {
        return {
            todos: [
                {
                    done: false,
                    title: 'Finnish this presentation'
                }
            ]
        }
    },

    createNewTodo(title) {
        this.setState({
            todos: [...this.state.todos, {title, done: false}]
        });
    },
    onTodoClick(index) {
       this.setState({
           todos: this.state.todos.map( (todo, i) => {
               if(index === i) {
                   todo.done = !todo.done;
               }
               return todo;
           })
       })
    },
    render() {
        return (
            <div>
                <TodoInput onSubmit={this.createNewTodo} />
                <ul>
                    {
                        this.state.todos.map(
                            (todo, index) => <TodoItem onClick={this.onTodoClick} index={index} {...todo} key={index} />
                        )
                    }
                </ul>
            </div>
        )
    }
})

export default TodoList;