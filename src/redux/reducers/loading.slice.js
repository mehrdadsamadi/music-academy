import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    title: "در حال دریافت اطلاعات ...",
    show: false
}

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        open: (state, {payload}) => {
            const {title = "در حال دریافت اطلاعات ..."} = payload

            state.title = title
            state.show = true
        },
        close: (state) => {
            Object.keys(initialState).map(key => state[key] = initialState[key])
        }
    }
})

export const loading = (options = {}) => {
    return (dispatch) => {
        dispatch(open(options))
    }
}

export const selectAllLoadingState = state => state.loading
export const selectOneLoadingState = (state, value) => state.loading[value]

export const {open , close} = loadingSlice.actions

export default loadingSlice.reducer