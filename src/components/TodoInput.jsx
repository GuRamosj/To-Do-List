import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoInput() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useRecoilState(todoListState)

  function addTodo() {
    if (text.trim() === '') return

    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }

    setTodos([...todos, newTodo])
    setText('')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo}>
        Adicionar
      </button>
    </div>
  )
}
