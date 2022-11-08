import { IGetActualPricePayload, IHomeDuckInitialState } from "../../types/interface";

export const Types = {
    GET_ACTUAL_PRICE_REQUEST: 'GET_ACTUAL_PRICE_REQUEST',
    GET_ACTUAL_PRICE_SUCCESS: 'GET_ACTUAL_PRICE_SUCCESS',
    GET_ACTUAL_PRICE_FAIL: 'GET_ACTUAL_PRICE_FAIL'
};



const INITIAL_STATE: IHomeDuckInitialState = {
    loading: false,
    error: false,
    actualPriceData: null,
};

export default function Home(state = INITIAL_STATE, action: any) {
    switch (action.type) {
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
            };
        case Types.GET_ACTUAL_PRICE_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}

export const Creators = {
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
};
