import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({ // we use this method to export a variable. It takes an object
    reducer: todoReducer
});