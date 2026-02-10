import { useRecoilState } from 'recoil'
import { filterState } from './atoms/filterAtom'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {
  const [filter, setFilter] = useRecoilState(filterState)

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>

      <h1>To-do List com Recoil</h1>

      <TodoInput />

      <div style={{ margin: '15px 0' }}>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('completed')}>Concluídas</button>
        <button onClick={() => setFilter('pending')}>Pendentes</button>
      </div>

      <TodoList />

    </div>
  )
}
