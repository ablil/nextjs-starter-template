"use client"
import { InitializeAppAction } from "@/lib/state/actions"
import { AppStore, makeStore } from "@/lib/state/store"
import React, { FC, PropsWithChildren, useRef } from "react"
import { Provider } from "react-redux"

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AppStore>(undefined)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(InitializeAppAction())
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
