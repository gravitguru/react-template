import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    initaialData : [],
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        dataCheck : (state,action)=>{
            state = [action.payload]
        }
    }
})

export const {dataCheck} = slice.actions
export default slice.reducer
