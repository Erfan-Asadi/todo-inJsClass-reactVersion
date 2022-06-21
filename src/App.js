import './App.css';
import TodoContextProvider from './contexts/TodoContext';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </div>
  );
}

export default App;
