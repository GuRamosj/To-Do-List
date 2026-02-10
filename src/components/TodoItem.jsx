import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoListState)

  function toggleTodo() {
    const updated = todos.map(item =>
      item.id === todo.id
        ? { ...item, completed: !item.completed }
        : item
    )

    setTodos(updated)
  }

  function removeTodo() {
    const filtered = todos.filter(item => item.id !== todo.id)
    setTodos(filtered)
  }

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.text}
      </span>

      <button onClick={toggleTodo}>✔</button>
      <button onClick={removeTodo}>❌</button>
    </li>
  )
}
