import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: "",
    message: "",
    closeBtnText: "خیر",
    agreeBtnText: "بله",
    show: false
}

const promptSlice = createSlice({
    name: "prompt",
    initialState,
    reducers: {
        open: (state, {payload}) => {
            Object.keys(payload).map(key => state[key] = payload[key])
            state.show = true
        },
        close: (state) => {
            state.show = false
            state.title = ""
            state.message = ""
            state.closeBtnText = "خیر"
            state.agreeBtnText = "بله"
        }
    }
})

export const selectAllPromptState = state => state.prompt
export const selectOnePromptState = (state, value) => state.prompt[value]

export const { open, close } = promptSlice.actions

export default promptSlice.reducer