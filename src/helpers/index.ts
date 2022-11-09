export const makeGetHistoryDataURL = (mode: 'week' | 'monthly' | 'day') => {
    const obj = {
        week: 'query?function=TIME_SERIES_WEEKLY&symbol=',
        day: 'query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=',
        monthly: 'query?function=TIME_SERIES_MONTHLY&symbol='
    }

    return obj[mode]
}