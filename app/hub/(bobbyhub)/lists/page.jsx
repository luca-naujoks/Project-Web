"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const listValue = searchParams.get("list");
    if (listValue) {
      setValue(listValue);
    }
  }, []);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddTodo() {
    const trimmedValue = inputValue.trim();
    if (trimmedValue === "") {
      return;
    } else {
      setTodos([
        ...todos,
        { id: uuidv4(), text: inputValue, completed: false, list: value },
      ]);
      setInputValue("");
    }
  }

  function handleToggleCompletion(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function handleInputKeyDown(e) {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  }

  function handleDeleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  // Separate completed and incompleted todos into two arrays
  const completedTodos = todos.filter((todo) => todo.list === value && todo.completed);
  const incompletedTodos = todos.filter((todo) => todo.list === value && !todo.completed);

  return (
    <div className="max-w-md mx-auto my-10">
      <h1 className="text-white text-2xl font-bold pl-1 mb-5">{value}</h1>
      <div className="flex border-2 border-gray-800 p-1 rounded-md mb-5">
        <input
          type="text"
          className="outlane-none bg-transparent border-transparent focus:outline-none border-0 p-2 flex-1 mr-3 text-white"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-disc mb-6">
        {incompletedTodos.map((todo, index) => (
          <li
            key={todo.id}
            className="flex items-center text-white bg-[#161b22] mb-2 p-2 rounded-sm"
          >
            <span
              className={
                todo.completed
                  ? "line-through cursor-pointer flex-1"
                  : "cursor-pointer flex-1"
              }
              onClick={() => handleToggleCompletion(todos.indexOf(todo))}
            >
              {todo.text}
            </span>
            <button
              className="text-red-700 hover:text-red-800"
              onClick={() => handleDeleteTodo(todos.indexOf(todo))}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <hr className="border-gray-500" />
      <ul className="list-disc mt-6">
        {completedTodos.map((todo, index) => (
          <li
            key={todo.id}
            className="flex items-center text-white bg-[#161b22] mb-2 p-2 rounded-sm"
          >
            <span
              className={
                todo.completed
                  ? "line-through cursor-pointer flex-1"
                  : "cursor-pointer flex-1"
              }
              onClick={() => handleToggleCompletion(todos.indexOf(todo))}
            >
              {todo.text}
            </span>
            <button
              className="text-red-700 hover:text-red-800"
              onClick={() => handleDeleteTodo(todos.indexOf(todo))}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
