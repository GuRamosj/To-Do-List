import { selector } from 'recoil'
import { todoListState } from '../atoms/todoAtom'
import { filterState } from '../atoms/filterAtom'

export const filteredTodosSelector = selector({
  key: 'filteredTodosSelector',

  get: ({ get }) => {
    const todos = get(todoListState)
    const filter = get(filterState)

    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed)

      case 'pending':
        return todos.filter(todo => !todo.completed)

      default:
        return todos
    }
  }
})
