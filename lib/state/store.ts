import { configureStore } from "@reduxjs/toolkit"
import { DefaultReducer } from "./slices/app"
import createSagaMiddleware from "redux-saga"
import { appSagasWatcher } from "./sagas/app"

const sagaMiddleware = createSagaMiddleware()

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      default: DefaultReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  })
  sagaMiddleware.run(appSagasWatcher)
  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
