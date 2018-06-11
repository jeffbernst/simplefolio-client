import { getPriceDataRequest, getPriceDataSuccess, getPriceDataError } from '../../actions'
import { GET_PRICE_DATA_REQUEST, GET_PRICE_DATA_SUCCES, GET_PRICE_DATA_ERROR } from '../../actions/types'

describe('getPriceDataRequest', () => {
  it('Should return the action', () => {
    const action = getPriceDataRequest()
    expect(action.type).toEqual(GET_PRICE_DATA_REQUEST)
  })
})

describe('getPriceDataSuccess', () => {
  it('Should return the action', () => {
    const priceData = {prices: 'lots of prices!'}
    const action = getPriceDataSuccess(priceData)
    expect(action.type).toEqual(GET_PRICE_DATA_SUCCES)
    expect(action.payload).toEqual(priceData)
  })
})

describe('getPriceDataError', () => {
  it('Should return the action', () => {
    const error = 'my error'
    const action = getPriceDataSuccess(error)
    expect(action.type).toEqual(GET_PRICE_DATA_ERROR)
    expect(action.payload).toEqual(error)
  })
})
