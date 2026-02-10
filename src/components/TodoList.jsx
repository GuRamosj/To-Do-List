import { useRecoilValue } from 'recoil'
import { filteredTodosSelector } from '../selectors/filteredTodosSelector'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useRecoilValue(filteredTodosSelector)

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
