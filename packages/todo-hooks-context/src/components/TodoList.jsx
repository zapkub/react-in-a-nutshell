import React from "react";
import { TodoStoreContext } from "../store";

const TodoItem = ({ title, completed, onChecked, onRemove, onTitleChange }) => {

  // ตัวอย่างการใช้ Hooks API ใน Function Component
  // Todo Item แต่ละอันจะมี State ของ Input แยกเพิ่มจัดการ
  // การแก้ไข Todo นั้นๆ
  const [isEditing, setIsEditing] = React.useState(false);
  const ref = React.createRef();
  function onTitleDoubleClick() {
    setIsEditing(true);
  }

  React.useEffect(
    () => {
      if (isEditing) {
        ref.current.focus();
      } else {
        // เมื่อ onBlur ให้ update state title
        // ของ Todo ใน singleton store
        onTitleChange(ref.current.innerHTML);
      }
    },
    [isEditing]
  );

  return (
    <>
      <input
        className="toggle"
        onChange={onChecked}
        checked={completed}
        type="checkbox"
      />
      <label
        ref={ref}
        contentEditable={isEditing}
        onDoubleClick={onTitleDoubleClick}
        onChange={onTitleChange}
        className={isEditing ? "on-edit": ""}
        onBlur={() => setIsEditing(false)}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <button onClick={onRemove} className="destroy" />
    </>
  );
};

export const TodoList = () => {
  // นอกจากการใช้ Consumer
  // React Hooks API อันใหม่
  // สามารถใช้ useContext API
  // เพื่อดึง Value ออกมาจาก Provider
  // ได้เลย
  const {
    todos,
    onRemoveTodo,
    onCheckTodo,
    onCheckAllTodo,
    onTodoTitleChange
  } = React.useContext(TodoStoreContext);

  return (
    <>
      <input
        onChange={onCheckAllTodo()}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, i) => (
          <li key={i}>
            <TodoItem
              {...todo}
              onTitleChange={onTodoTitleChange(i)}
              onRemove={onRemoveTodo(i)}
              onChecked={onCheckTodo(i)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
