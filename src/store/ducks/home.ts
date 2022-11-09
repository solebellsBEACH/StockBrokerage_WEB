import { Option } from "chakra-ui-simple-autocomplete";
import { IGetActualPricePayload, IGetCompareStocksPayload, IGetStocksPayload, IHomeDuckInitialState, ISetOnFocusBlockPayload } from "../../types/interface";

export const Types = {
    GET_ACTUAL_PRICE_REQUEST: 'GET_ACTUAL_PRICE_REQUEST',
    GET_ACTUAL_PRICE_SUCCESS: 'GET_ACTUAL_PRICE_SUCCESS',
    GET_ACTUAL_PRICE_FAIL: 'GET_ACTUAL_PRICE_FAIL',
    GET_STOCKS_REQUEST: 'GET_STOCKS_REQUEST',
    GET_STOCKS_SUCCESS: 'GET_STOCKS_SUCCESS',
    GET_STOCKS_RESET: 'GET_STOCKS_RESET',
    GET_STOCKS_FAIL: 'GET_STOCKS_FAIL',

    GET_HISTORY_DATA_SUCCESS: 'GET_HISTORY_DATA_SUCCESS',
    GET_HISTORY_DATA_REQUEST: 'GET_HISTORY_DATA_REQUEST',
    GET_HISTORY_DATA_FAIL: 'GET_HISTORY_DATA_FAIL',

    GET_COMPARE_STOCKS_SUCCESS: 'GET_COMPARE_STOCKS_SUCCESS',
    GET_COMPARE_STOCKS_REQUEST: 'GET_COMPARE_STOCKS_REQUEST',
    GET_COMPARE_STOCKS_FAIL: 'GET_COMPARE_STOCKS_FAIL',
    RESET_COMPARE_STOCKS_DATA: 'RESET_COMPARE_STOCKS_DATA',

    SET_ONFOCUS_BLOCK: 'SET_ONFOCUS_BLOCK',

    RESET_HISTORY_DATA: 'RESET_HISTORY_DATA'
};



const INITIAL_STATE: IHomeDuckInitialState = {
    loading: false,
    error: false,
    actualPriceData: null,
    stocks: null,
    onFocusBlock: 'intro',
    historyData: null,
    compareStocksData: null
};

export default function Home(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Types.GET_HISTORY_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.GET_HISTORY_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                historyData: action.payload
            };
        case Types.GET_HISTORY_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        case Types.GET_STOCKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.GET_STOCKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                stocks: action.payload.bestMatches
            };
        case Types.GET_STOCKS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        case Types.GET_STOCKS_RESET:
            return {
                ...state,
                stocks: null
            };
        case Types.GET_ACTUAL_PRICE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.GET_ACTUAL_PRICE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                actualPriceData: action.payload
            };
        case Types.GET_ACTUAL_PRICE_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        case Types.SET_ONFOCUS_BLOCK:
            return {
                ...state,
                onFocusBlock: action.payload.block
            }

        case Types.RESET_HISTORY_DATA:
            return {
                ...state,
                historyData: null
            }
        case Types.GET_COMPARE_STOCKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.GET_COMPARE_STOCKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                compareStocksData: action.payload
            };
        case Types.GET_COMPARE_STOCKS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };

        case Types.RESET_COMPARE_STOCKS_DATA:
            return {
                ...state,
                compareStocksData: null
            };
        default:
            return state;
    }
}

export const Creators = {
    getHistoryStockRequest: (payload: { symbol: string, mode: 'week' | 'monthly' | 'day' }) => ({
        type: Types.GET_HISTORY_DATA_REQUEST,
        payload
    }),
    getHistoryStockSuccess: (payload: any) => ({
        type: Types.GET_HISTORY_DATA_SUCCESS, payload
    }),
    getHistoryStockFail: () => ({
        type: Types.GET_HISTORY_DATA_FAIL
    }),
    getActualPriceRequest: (payload: { name: string }) => ({
        type: Types.GET_ACTUAL_PRICE_REQUEST,
        payload
    }),
    getActualPriceSuccess: (payload: IGetActualPricePayload) => ({
        type: Types.GET_ACTUAL_PRICE_SUCCESS, payload
    }),
    getActualPriceFail: () => ({
        type: Types.GET_ACTUAL_PRICE_FAIL
    }),
    getStocksRequest: (payload: { name: string }) => ({
        type: Types.GET_STOCKS_REQUEST,
        payload
    }),
    getStocksReset: () => ({
        type: Types.GET_STOCKS_RESET
    }),
    getStocksSuccess: (payload: IGetStocksPayload) => ({
        type: Types.GET_STOCKS_SUCCESS, payload
    }),
    getStocksFail: () => ({
        type: Types.GET_STOCKS_FAIL
    }),
    setOnFocusBlock: (payload: ISetOnFocusBlockPayload) => ({
        type: Types.SET_ONFOCUS_BLOCK, payload
    }),
    resetHistoryData: () => ({
        type: Types.RESET_HISTORY_DATA,
    }),
    getCompareStocksRequest: (payload: { stocks: Option[] }) => ({
        type: Types.GET_COMPARE_STOCKS_REQUEST,
        payload
    }),
    getCompareStocksSuccess: (payload: IGetCompareStocksPayload) => ({
        type: Types.GET_COMPARE_STOCKS_SUCCESS, payload
    }),
    getCompareStocksFail: () => ({
        type: Types.GET_COMPARE_STOCKS_FAIL
    }),
    resetCompareStocksData: () => ({
        type: Types.RESET_COMPARE_STOCKS_DATA
    }),
};
