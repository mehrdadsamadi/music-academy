import {configureStore} from "@reduxjs/toolkit"

import promptReducer from "../reducers/prompt.slice"

export const store = configureStore({
    reducer: {
        prompt: promptReducer
    }
})