import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    const [input, setInput] = useState('');
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        addTodo(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Adicionar nova tarefa..."
                className="flex-1 rounded-lg border-none bg-white/50 px-4 py-3 text-gray-800 shadow-sm backdrop-blur-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all hover:bg-white/80"
            />
            <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:from-purple-500 hover:to-blue-500 active:scale-95"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
