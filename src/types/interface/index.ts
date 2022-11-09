export interface IHomeDuckInitialState {
    loading: boolean
    error: boolean
    actualPriceData: IGetActualPricePayload | null
    stocks: IStock[] | null,
    onFocusBlock: 'intro' | 'getActualPrice' | 'getHistoryPrice'
}

export interface IGetActualPricePayload {
    lastPrice: number
    name: string
    pricedAt: string
}

export interface IStock {
    ["1. symbol"]: string,
    ["2. name"]: string,
    ["3. type"]: string,
    ["4. region"]: string,
    ["5. marketOpen"]: string,
    ["6. marketClose"]: string,
    ["7. timezone"]: string,
    ["8. currency"]: string,
    ["9. matchScore"]: string
}
export interface IGetStocksPayload {
    bestMatches: IStock[]
}
export interface ISetOnFocusBlockPayload {
    block: 'intro' | 'getActualPrice' | 'getHistoryPrice'
}