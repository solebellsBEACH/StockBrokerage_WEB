export interface IHomeDuckInitialState{
    loading: boolean
    error: boolean
    actualPriceData: IGetActualPricePayload|null
}

export interface IGetActualPricePayload{
    lastPrice: number
    name: string
    pricedAt: string
}