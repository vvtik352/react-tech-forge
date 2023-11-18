import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const rootReducer = combineReducers({})

const middlewares = [logger]
export const setupStore = () =>
  configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
