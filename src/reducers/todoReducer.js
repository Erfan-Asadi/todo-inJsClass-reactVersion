import {
    v4 as uuid
} from 'uuid';

export const todoReducer = (state, action) => {
   switch(action.type) {
       case 'ADD_TODO':
           return [
               ...state,
               {
                   title: action.payload,
                   completed: false,
                   canEdit: true,
                   id: uuid()
               }
           ]
       case 'REMOVE_TODO':
           return state.filter(todo => todo.id !== action.payload);
       case 'TOGGLE_TODO':
            const updated_state = state.map(todoItem => {
                if(todoItem.id === action.payload) {
                    return {
                        ...todoItem,
                        completed: !todoItem.completed
                    }
                }
                return todoItem
            })
            return updated_state;
    //    case 'EDIT_TODO':
    //        return state;
       default:
           return state;
   }
}