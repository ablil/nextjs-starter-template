import { put, takeLatest } from "redux-saga/effects";
import { InitializeAppAction } from "../actions";
import { DefaultActions } from "../slices/app";

function* initAppWorker() {
  // TODO: init application if necessary
  yield put(DefaultActions.init())
}

export function* appSagasWatcher() {
  yield takeLatest(InitializeAppAction.type, initAppWorker)
}