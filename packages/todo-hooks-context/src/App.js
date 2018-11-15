import React from "react";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

// store/index.jsx
const TodoStoreContext = React.createContext();

const TodoStoreProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([
    {
      title: "Touch myself."
    },
    {
      title: "Sleep peacefully"
    }
  ]);
  const store = {
    todos,
    submitTodo: title => setTodos([...todos, { title }])
  };
  return (
    <TodoStoreContext.Provider value={store}>
      {children}
    </TodoStoreContext.Provider>
  );
};

const TodoStoreConsumer = TodoStoreContext.Consumer;
// TodoItem.jsx
const TodoItem = ({ title, completed }) => {
  return (
    <>
      <input className="toggle" type="checkbox" />
      <label dangerouslySetInnerHTML={{ __html: title }} />
      <button className="destroy" />
    </>
  );
};

// TodoInput.jsx
const TodoInput = () => {
  const [textInput, setTextInput] = React.useState("");

  function onTextChange(e) {
    setTextInput(e.target.value);
  }
  return (
    <TodoStoreConsumer>
      {store => {
        function onEnterPress(e) {
          if (e.key === "Enter") {
            store.submitTodo(textInput);
            setTextInput("");
          }
        }
        return (
          <input
            onKeyPress={onEnterPress}
            className="new-todo"
            value={textInput}
            onChange={onTextChange}
          />
        );
      }}
    </TodoStoreConsumer>
  );
};

const TodoList = () => (
  <TodoStoreConsumer>
    {store => (
      <ul className="todo-list">
        {store.todos.map(todo => (
          <li>
            <TodoItem {...todo} />
          </li>
        ))}
      </ul>
    )}
  </TodoStoreConsumer>
);
const TodoCount = () => {
  const store = React.useContext(TodoStoreContext);
  return (
    <span className="todo-count">
      <strong>{store.todos.length}</strong> item
      {store.todos.length === 1 ? "" : "s"} left
    </span>
  );
};
const TodoFilters = () => <div />;
const Footer = () => <div />;

export default () => (
  <TodoStoreProvider>
    <div className="App todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoInput />
      </header>
      <section className="main">
        <TodoList />
      </section>
      <footer className="footer">
        <TodoCount />
        <TodoFilters />
      </footer>
    </div>
    <Footer />
  </TodoStoreProvider>
);
