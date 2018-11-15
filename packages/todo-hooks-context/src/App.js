import React from "react";
import { TodoStoreProvider } from "./store";

import { TodoFilters } from "./components/TodoFilters";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import Footer from "./components/Footer";
import { TodoCount } from "./components/TodoCount";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

export default () => {
  return (
    <TodoStoreProvider>
      <div className="App todoapp">
        <header className="header">
          <h1>{"todos"}</h1>
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
};
