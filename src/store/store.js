import { configureStore } from '@reduxjs/toolkit'
import dummyReducer from './dummyReducer'

const store = configureStore({
  reducer: { dummy: dummyReducer }
})

export default store;