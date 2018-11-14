import React from "react";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import { useTodoList } from "./store";

const TodoItem = ({ title, completed, onChecked, onRemove }) => (
  <>
    <input
      className="toggle"
      onChange={onChecked}
      checked={completed}
      type="checkbox"
    />
    <label>{title}</label>
    <button onClick={onRemove} className="destroy" />
  </>
);

const TodoListFilter = ({ active, filter, onClick }) => (
  <a href="/#" className={active ? "selected" : ""} onClick={onClick}>
    {filter}
  </a>
);

export default () => {
  const {
    todos,
    textInput,
    onInputChange,
    onSubmitTodo,
    onCheckTodo,
    onRemoveTodo,
    onSetFilter,
    filter,
    filterList,
    onClearCompletedTodo
  } = useTodoList();

  const handleInputEnterPress = e => {
    if (e.key === "Enter") {
      onSubmitTodo();
    }
  };

  return (
    <div className="App todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onKeyPress={handleInputEnterPress}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={textInput}
          onChange={onInputChange}
        />
      </header>
      <section className="main">
        <ul className="todo-list">
          {todos.map((todo, i) => (
            <li key={i}>
              <TodoItem
                {...todo}
                onRemove={onRemoveTodo(i)}
                onChecked={onCheckTodo(i)}
              />
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count" />
        <ul className="filters">
          {filterList.map(filterName => (
            <li key={filterName}>
              <TodoListFilter
                active={filter === filterName}
                filter={filterName}
                onClick={onSetFilter(filterName)}
              />
            </li>
          ))}
        </ul>
        <button className="clear-completed" onClick={onClearCompletedTodo}>
          Clear completed
        </button>
      </footer>
    </div>
  );
};
