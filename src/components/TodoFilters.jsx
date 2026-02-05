import { useTodo } from '../context/TodoContext';

function TodoFilters() {
    const { filter, setFilter } = useTodo();

    const getButtonClass = (active) =>
        `rounded-full px-4 py-2 text-sm font-medium transition-all ${active
            ? 'bg-purple-100 text-purple-700 shadow-sm border border-purple-200'
            : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
        }`;

    return (
        <div className="flex justify-center gap-2 mb-6">
            <button
                onClick={() => setFilter('all')}
                className={getButtonClass(filter === 'all')}
            >
                Todos
            </button>
            <button
                onClick={() => setFilter('pending')}
                className={getButtonClass(filter === 'pending')}
            >
                Pendentes
            </button>
            <button
                onClick={() => setFilter('completed')}
                className={getButtonClass(filter === 'completed')}
            >
                Concluídos
            </button>
        </div>
    );
}

export default TodoFilters;
