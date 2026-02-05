import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 px-4 py-10 font-sans text-gray-900">
        <div className="mx-auto max-w-2xl">
          <header className="mb-8 text-center">
            <h1 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
              Minhas Tarefas
            </h1>
            <p className="mt-2 text-gray-500">
              Organize seu dia com eficiência
            </p>
          </header>

          <main className="rounded-2xl bg-white/30 p-6 shadow-xl backdrop-blur-md sm:p-10 border border-white/50">
            <TodoForm />
            <TodoFilters />
            <TodoList />
          </main>

          <footer className="mt-10 text-center text-sm text-gray-400">
            <p>Advanced React Todo App</p>
          </footer>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
