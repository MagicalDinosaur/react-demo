import { combineReducers } from 'redux'
import {
  // ADD_TODO,
  // TOGGLE_TODO,
  // SET_VISIBILITY_FILTER,s
  VisibilityFilters
} from './actions'
// const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        console.log(index)
        return todo
      })
    default:
      return state
  }
}
// Redux 原生提供combineReducers()辅助函数，来把根 reducer 拆分成多个函数，用于分别处理 state 树的一个分支
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp