import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../axios/axios'

const url = 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'


export const getMarkets = createAsyncThunk(
  'markets/getMarkets',
  async () => {
    const response = await instance.get(url)
    return response.data
  }
)

interface MarketsState {
    markets: []
    loading: boolean
    errorMessage: string
}

const initialState: MarketsState = {
    markets: [],
    loading: false,
    errorMessage: ''
} 

const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
        .addCase(getMarkets.pending, state => {
            state.loading = true
        })
        .addCase(getMarkets.fulfilled, (state, action) => {
            state.loading = false
            state.markets = action.payload
        })
        .addCase(getMarkets.rejected, (state, action: any) => {
            state.loading = false            
            state.errorMessage = action.error.message
        })
  },
})


export default marketsSlice.reducer