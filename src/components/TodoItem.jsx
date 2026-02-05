import React from 'react';
import { useTodo } from '../context/TodoContext';

const TodoItem = React.memo(({ todo }) => {
    const { toggleTodo, removeTodo } = useTodo();

    console.log(`Rendering TodoItem: ${todo.text}`); // Performance testing

    return (
        <div
            className={`group mb-3 flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:scale-[1.01] hover:shadow-md ${todo.completed ? 'opacity-75' : 'opacity-100'
                }`}
        >
            <div className="flex items-center gap-3 overflow-hidden">
                <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${todo.completed
                        ? 'border-green-500 bg-green-500'
                        : 'border-gray-300 hover:border-purple-400'
                        }`}
                >
                    {todo.completed && (
                        <svg
                            className="h-3.5 w-3.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    )}
                </button>
                <span
                    className={`truncate text-lg transition-all ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
                        }`}
                >
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => removeTodo(todo.id)}
                className="hidden rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 group-hover:block"
                aria-label="Delete task"
            >
                <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </button>
        </div>
    );
});

TodoItem.displayName = 'TodoItem';
export default TodoItem;
