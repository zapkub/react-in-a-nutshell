import React from "react";
import { TodoStoreConsumer } from "../store";

export const TodoCount = () => {
  return (
    <TodoStoreConsumer>
      {store => {
        return (
          <span className="todo-count">
            <strong>{store.todos.length}</strong> item
            {store.todos.length === 1 ? "" : "s"} left
          </span>
        );
      }}
    </TodoStoreConsumer>
  );
};
