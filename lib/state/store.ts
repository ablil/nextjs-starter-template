import { configureStore } from "@reduxjs/toolkit"
import { DefaultReducer } from "./slices/app"
import { useDispatch, useSelector, useStore } from "react-redux"
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

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
