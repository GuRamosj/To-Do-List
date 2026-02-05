import { createContext, useContext, useMemo, useCallback, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useLocalStorage('todos', []);
    // Managing filter state locally as it doesn't necessarily need persistence, but used useState here.
    const [filter, setFilter] = useState('all');

    const addTodo = useCallback((text) => {
        if (!text.trim()) return;
        setTodos((prev) => [
            ...prev,
            { id: Date.now(), text, completed: false },
        ]);
    }, [setTodos]);

    const removeTodo = useCallback((id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }, [setTodos]);

    const toggleTodo = useCallback((id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, [setTodos]);

    const filteredTodos = useMemo(() => {
        console.log('Filtering todos...'); // For performance testing requested by user
        switch (filter) {
            case 'completed':
                return todos.filter((todo) => todo.completed);
            case 'pending':
                return todos.filter((todo) => !todo.completed);
            default:
                return todos;
        }
    }, [todos, filter]);

    const value = useMemo(
        () => ({
            todos,
            filter,
            setFilter,
            filteredTodos,
            addTodo,
            removeTodo,
            toggleTodo,
        }),
        [todos, filter, filteredTodos, addTodo, removeTodo, toggleTodo]
    );

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
}
