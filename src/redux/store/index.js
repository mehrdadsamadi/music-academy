import { configureStore } from "@reduxjs/toolkit"

import { promptReducer, loadingReducer } from "../reducers"

export const store = configureStore({
    reducer: {
        prompt: promptReducer,
        loading: loadingReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})