import React from "react";
import { useDehydrated, useHydrated } from "./useLocalStorage";

const defaultState = {
  filter: "All",
  todos: [],
  textInput: ""
};

export function useTodoList(initialState = defaultState) {

  // Data ของ state ใน Todo app
  const [filter, setFilter] = React.useState(initialState.filter);
  const [todos, setTodo] = React.useState(initialState.todos);
  const [textInput, setTextInput] = React.useState(initialState.textInput);


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

    onTodoTitleChange: index => value => {
      setTodo(
        todos.map((todo, i) => {
          if (i === index) {
            todo.title = value;
          }
          return todo;
        })
      );
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

    onCheckAllTodo: () => e => {
      setTodo(
        todos.map(todo => {
          todo.completed = e.target.checked;
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

export const TodoStoreContext = React.createContext();

/**
 * @param {{children: (todoStore: ReturnType<typeof useTodoList>) => void}}
 */
export const TodoStoreConsumer = ({ children }) => {
  return (
    <TodoStoreContext.Consumer>
      {value => children(value)}
    </TodoStoreContext.Consumer>
  );
};

export const TodoStoreProvider = ({ children }) => {
  /**
   * Waiting until persist state
   * loaded
   */
  const { loading, dehydratedState } = useDehydrated();

  // Localforage เป็น Async
  // ก่อนที่จะ load state จาก persistance storage
  // Provider จะไม่ render children
  if (loading) {
    return <div />;
  }

  const todoStore = useTodoList(dehydratedState);
  const { todos, textInput, filter } = todoStore;

  // subscribe every effect on
  // Todo state to store to persistance storage
  useHydrated({ todos, filter, textInput });

  return (
    <TodoStoreContext.Provider value={todoStore}>
      {children}
    </TodoStoreContext.Provider>
  );
};
