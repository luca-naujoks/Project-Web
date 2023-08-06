"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const [showCompletedTodos, setShowCompletedTodos] = useState(false);

  const createInitialTodosData = () => {
    const initialTodos = [];

    localStorage.setItem("todos", JSON.stringify(initialTodos));
    return initialTodos;
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));

    if (savedTodos) {
      setTodos(savedTodos);
    } else {
      const initialTodos = createInitialTodosData();
      setTodos(initialTodos);
    }
  }, []);
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
    if (trimmedValue !== "") {
      setTodos([
        { id: uuidv4(), text: inputValue, completed: false, list: value },
        ...todos,
      ]);
      setInputValue("");
    }
  }

  async function handleToggleCompletion(index, coldown = 0) {
    await sleep(coldown);
  
    const newTodos = [...todos];
    const toggledTodo = newTodos[index];
    newTodos.splice(index, 1);
  
    const newTodo = {
      ...toggledTodo,
      completed: !toggledTodo.completed,
    };
  
    setTodos([newTodo, ...newTodos]);
  }
  function toggleCompletedTodos() {
    setShowCompletedTodos((prevState) => !prevState);
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

  const completedTodos = todos.filter(
    (todo) => todo && todo.list === value && todo.completed
  );
  const incompletedTodos = todos.filter(
    (todo) => todo && todo.list === value && !todo.completed
  );

  return (
    <div className="mx-20 my-10">
      <h1 className="text-white text-2xl font-bold pl-1 mb-5">{value}</h1>
      <div className="flex border-2 border-gray-800 p-1 rounded-md mb-5">
        <input
          type="text"
          className="outlane-none bg-transparent border-transparent focus:outline-none border-0 p-1 flex-1 mr-3 text-white"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <button
          className="bg-gray-800 text-white px-4 rounded xs:hidden md:block"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <div className="">
        <ul className="list-disc  max-h-64 overflow-y-scroll scrollbar-none">
          {incompletedTodos.map((todo, index) => (
            <li
              key={todo.id}
              className="flex items-center text-white bg-[#161b22] mb-2 p-2 rounded-sm"
            >
              <input
                type="radio"
                className="mr-2"
                onClick={() => handleToggleCompletion(todos.indexOf(todo), 80)}
              />
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
        <div className="cursor-pointer" onClick={toggleCompletedTodos}>Completed <span>{showCompletedTodos? "🞂" : "🞃"}</span></div>
        {showCompletedTodos && (
        <ul id="completeditems" className="list-disc mt-6 max-h-64 overflow-y-scroll scrollbar-none">
          {completedTodos.map((todo, index) => (
            <li
              key={todo.id}
              className="flex items-center text-white bg-[#161b22] mb-2 p-2 rounded-sm"
            >
              <input
                type="radio"
                className="mr-2"
                checked="checked"
                onClick={() => handleToggleCompletion(todos.indexOf(todo), 80)}
              />
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
        )}
      </div>
    </div>
  );
}
