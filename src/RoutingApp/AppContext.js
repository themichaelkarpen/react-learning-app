import React from 'react'

const AppContext = React.createContext({
    todos: [
        {id:1, text:'Get Grocery', complete:false},
        {id:2, text:'Excercise', complete:false},
        {id:3, text:'Drink Water', complete:true},
    ],
    currentTodo: {}, 
    selectedPage: 'home'
})

export default AppContext