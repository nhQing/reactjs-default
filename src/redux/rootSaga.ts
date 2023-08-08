import { all } from 'redux-saga/effects';
import { watcherTest } from './sagas/test-saga';
export default function* rootSaga() {
    yield all([
        ...watcherTest,
    ]);
}
