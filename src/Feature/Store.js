import {configureStore} from '@reduxjs/toolkit'
import slice from './Slice'
const store = configureStore({
    reducer  : {
        data  : slice,        
    },
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: true,
        })
})

export default store

