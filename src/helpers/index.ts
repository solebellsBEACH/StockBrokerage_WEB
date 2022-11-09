import { Option } from "chakra-ui-simple-autocomplete"

export const makeGetHistoryDataURL = (mode: 'week' | 'monthly' | 'day') => {
    const obj = {
        week: 'query?function=TIME_SERIES_WEEKLY&symbol=',
        day: 'query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=',
        monthly: 'query?function=TIME_SERIES_MONTHLY&symbol='
    }

    return obj[mode]
}
export const makeGetCompareStocksURL = (stocks: Option[]) => {
    
    let URL = 'compare?'
    stocks.map((e, i) => {
        if (i === 0) return
        if (i === 1) URL = URL + `stocksToCompare[]=${e.value}`
        else URL = URL + `&stocksToCompare[]=${e.value}` 
    })
    return URL
}
