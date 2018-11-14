import React from "react";

export function useTodoList() {
  const [filter, setFilter] = React.useState("All");
  const [todos, setTodo] = React.useState([]);
  const [textInput, setTextInput] = React.useState("");

  return {
    filter,
    filterList: ["All", "Active", "Completed"],
    onSetFilter: value => () => setFilter(value),
    get todos() {
      switch (filter) {
        case "Active":
          return todos.filter(({ completed }) => !completed);
        case "Completed":
          return todos.filter(({ completed }) => completed);
        case "All":
        default:
          return todos;
      }
    },

    /**
     * Input box state
     * and handle
     */
    textInput,
    onInputChange: e => {
      setTextInput(e.target.value);
    },

    // Todo list action handler
    onCheckTodo: index => e => {
      setTodo(
        todos.map((todo, i) => {
          if (i === index) {
            todo.completed = e.target.checked;
          }
          return todo;
        })
      );
    },
    onRemoveTodo: index => () => {
      setTodo(todos.filter((todo, i) => index !== i));
    },
    onSubmitTodo: () => {
      setTodo([
        ...todos,
        {
          title: textInput,
          completed: false
        }
      ]);
      setTextInput("");
    },
    onClearCompletedTodo: () => {
      setTodo(todos.filter(({ completed }) => !completed));
    }
  };
}
