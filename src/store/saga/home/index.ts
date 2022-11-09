import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { alphaKey, api, apiAlpha } from '../../../service/api';
import { Creators as HomeActions, Types as HomeTypes } from '../../ducks/home';

function* getActualPrice(props: { type: string, payload: { name: string } }): any {
  const { name } = props.payload
  console.log(props)
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
function* getStocks(props: { type: string, payload: { name: string } }): any {
  const { name } = props.payload
  try {
    const response = yield call(apiAlpha.get, `query?function=SYMBOL_SEARCH&keywords=${name}&apikey=${alphaKey}`);
    if (response.status === 200) {
      yield put(HomeActions.getStocksSuccess(
        response.data
      ));
    } else {
      yield put(HomeActions.getStocksFail());
    }
  } catch (error) {
    yield put(HomeActions.getStocksFail());
  }
}
function* getHistoryStock(props: { type: string, payload: { symbol: string, mode: string } }): any {
  const { symbol, mode } = props.payload
  try {
    const response = yield call(apiAlpha.get, `query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${alphaKey}`);
    if (response.status === 200) {
      yield put(HomeActions.getHistoryStockSuccess(
        response.data
      ));
    } else {
      yield put(HomeActions.getHistoryStockFail());
    }
  } catch (error) {
    yield put(HomeActions.getHistoryStockFail());
  }
}

function* getHistoryStockWatcher() {
  yield takeLatest(HomeTypes.GET_HISTORY_DATA_REQUEST, getHistoryStock);
}


function* getStocksWatcher() {
  yield takeLatest(HomeTypes.GET_STOCKS_REQUEST, getStocks);
}

function* getActualPriceWatcher() {
  yield takeLatest(HomeTypes.GET_ACTUAL_PRICE_REQUEST, getActualPrice);
}


export default function* rootSagas() {
  yield all([
    fork(getActualPriceWatcher),
    fork(getStocksWatcher),
    fork(getHistoryStockWatcher),
  ]);
}
