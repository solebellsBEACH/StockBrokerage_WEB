import { makeGetHistoryDataURL } from ".";

it("TESTANDO makeGetHistoryDataURL", () => {
    
    expect(makeGetHistoryDataURL('week')).toBe("query?function=TIME_SERIES_WEEKLY&symbol=");   
    expect(makeGetHistoryDataURL('day')).toBe("query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=");   
    expect(makeGetHistoryDataURL('monthly')).toBe("query?function=TIME_SERIES_MONTHLY&symbol=");   
  });