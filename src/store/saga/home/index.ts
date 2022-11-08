import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../../service/api';
import { Creators as HomeActions, Types as HomeTypes } from '../../ducks/home';

function* getActualPrice(props:{type: string, payload:{name: string}}): any {
  const { name} = props.payload
  try {
    const response = yield call(api.get, `stock/${name}/quote`);
    if (response.status === 200) {
      yield put(HomeActions.getActualPriceSuccess(
        response.data
      ));
    } else {
      yield put(HomeActions.getActualPriceFail());
    }
  } catch (error) {
    yield put(HomeActions.getActualPriceFail());
  }
}

function* getActualPriceWatcher() {
  yield takeLatest(HomeTypes.GET_ACTUAL_PRICE_REQUEST, getActualPrice);
}


export default function* rootSagas() {
  yield all([
    fork(getActualPriceWatcher),
  ]);
}
