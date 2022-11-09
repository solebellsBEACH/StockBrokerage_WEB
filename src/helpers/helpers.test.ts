import { makeGetCompareStocksURL, makeGetHistoryDataURL } from ".";

it("TESTANDO makeGetHistoryDataURL", () => {

  expect(makeGetHistoryDataURL('week')).toBe("query?function=TIME_SERIES_WEEKLY&symbol=");
  expect(makeGetHistoryDataURL('day')).toBe("query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=");
  expect(makeGetHistoryDataURL('monthly')).toBe("query?function=TIME_SERIES_MONTHLY&symbol=");
});

it("TESTANDO makeGetCompareStocksURL", () => {
  const stocksToCompare = [
    { label: 'V', value: 'V' }, { label: 'VAL', value: 'VAL' }, { label: 'VALE', value: 'VALE' }
  ]
  expect(makeGetCompareStocksURL(stocksToCompare))
    .toBe('compare?stocksToCompare[]=VAL&stocksToCompare[]=VALE')
});