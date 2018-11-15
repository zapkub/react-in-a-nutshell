import React from "react";

import { TodoStoreConsumer } from "../store";

const TodoListFilter = ({ active, filter, onClick }) => (
  <a href="./#" className={active ? "selected" : ""} onClick={onClick}>
    {filter}
  </a>
);

export const TodoFilters = () => {
  return (
    <TodoStoreConsumer>
      {({ filterList, onSetFilter, filter, onClearCompletedTodo }) => (
        <>
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
        </>
      )}
    </TodoStoreConsumer>
  );
};
