
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/counterSlice';
import flowReducer from './store/flowSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    flow: flowReducer,
  },
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


