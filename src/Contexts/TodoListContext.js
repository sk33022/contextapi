import React, { createContext, useReducer} from 'react'
import { todosReducer } from '../Reducers/todosReducer';
export const TodoListContext = createContext();



const TodoListContextProvider = ({ children}) => {
        const [todos, dispatch] = useReducer( todosReducer, [
            {text: "plan holiday" , id: 1},
            {text: "plan game" , id: 2},
            {text: "plan gambare" , id: 3},


        ]);
    
  return (
 <TodoListContext.Provider value={{ todos, dispatch }}>
     {children}
 </TodoListContext.Provider>
  )
};

export default TodoListContextProvider;
