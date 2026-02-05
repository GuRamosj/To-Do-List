import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
    const { filteredTodos } = useTodo();

    if (filteredTodos.length === 0) {
        return (
            <div className="mt-10 text-center text-gray-400">
                <p className="text-lg">Nenhuma tarefa encontrada.</p>
                <p className="text-sm">Comece adicionando uma nova tarefa!</p>
            </div>
        );
    }

    return (
        <div className="mt-4">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;
