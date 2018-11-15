import React from "react";
import { TodoStoreConsumer } from "../store";

export const TodoInput = () => {





  return (
    <TodoStoreConsumer>
      {({ onSubmitTodo, textInput, onInputChange }) => {
        const handleInputEnterPress = e => {
          if (e.key === "Enter") {
            onSubmitTodo();
          }
        };
        return (
          <>
            <input
              onKeyPress={handleInputEnterPress}
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={textInput}
              onChange={onInputChange}
            />
          </>
        );
      }}
    </TodoStoreConsumer>
  );
};
