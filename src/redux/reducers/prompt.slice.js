import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: "",
    message: "",
    rejectBtnText: "خیر",
    acceptBtnText: "بله",
    show: false,
    resolve: null
}

const promptSlice = createSlice({
    name: "prompt",
    initialState,
    reducers: {
        open: (state, { payload }) => {
            Object.keys(payload).map(key => state[key] = payload[key])
            state.show = true
        },
        close: (state) => {
            Object.keys(initialState).map(key => state[key] = initialState[key])
        },
        accept: (state) => {
            state.resolve(true)
            state.show = false
        }
    }
})

export const prompt = (options = {}) => {
    return (dispatch) => {
        return new Promise ((resolve) => {
            dispatch(open({...options, resolve}))
        })
    }
}

export const selectAllPromptState = state => state.prompt
export const selectOnePromptState = (state, value) => state.prompt[value]

export const { open, close, accept } = promptSlice.actions

export default promptSlice.reducer