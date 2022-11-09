export interface IHomeDuckInitialState {
    loading: boolean
    error: boolean
    actualPriceData: IGetActualPricePayload | null
    stocks: IStock[] | null,
    onFocusBlock: 'intro' | 'getActualPrice' | 'getHistoryPrice',
    historyData: any|null
}

export interface IGetActualPricePayload {
    lastPrice: number
    name: string
    pricedAt: string
}

export interface IHistoryData {
    ["Meta Data"]: {
        ["1. Information"]: string,
        ["2. Symbol"]: string,
        ["3. Last Refreshed"]: string,
        ["4. Time Zone"]: string
    },
    ["Weekly Time Series"]: IHistoryItem[]

}
export interface IHistoryItem {
    ["1. open"]: string,
    ["2. high"]: string,
    ["3. low"]: string,
    ["4. close"]: string,
    ["5. volume"]: string
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

export interface IFormControlContentProps {
    stock: string;
    handleSearch: () => void;
    blockName: string;
    stockNameOnChange: (e: string) => void;
    setSelectedStock: React.Dispatch<React.SetStateAction<string>>;
    selectedStock: string;
    handleGetHistoryPrice: () => void;
}