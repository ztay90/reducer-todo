import React, { useReducer } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { initialState, reducer } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: new Date()
    }
    dispatch({type:"ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
      <h2>React Todo App</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList state={state} handleComplete={handleComplete} />
      <button className="ClearBtn"
        onClick={(event) => {
          event.preventDefault()
          clearCompleted()
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;
