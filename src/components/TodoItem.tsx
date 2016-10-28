import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'glamor'


/**
 * Glamor is inline css for React
 * with Autoprefixer
 * and PostCSS
 */
const done = style({
    textDecoration: 'line-through'
})

/**
 * Create type of Todo
 * to use typed guard in props
 * and Intellisense
 */
export type Todo = {
    done: boolean;
    title: string;
}

const TodoItem = (props: {done: boolean, title: string; onClick?(index): void; index: number } ) => (
    <li onClick={() => props.onClick(props.index)} className={`${props.done ? done : null}`}>
        {props.index} {props.title}
    </li>
)

export default TodoItem;