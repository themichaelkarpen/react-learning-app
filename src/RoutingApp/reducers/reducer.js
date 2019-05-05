import React from 'react'

export default function reducer(state, action){
    switch(action.type){
        case "GET_TODOS":
          return {
              ...state,
              todos: action.payload
          }
        case "SET_CURRENT_TODO":
          return {
              ...state,
              currentTodo: action.payload
          }
        case "SET_SELECTED_PAGE":
          return {
              ...state,
              selectedPage: action.payload
          }
        default: 
            return state
    }
}