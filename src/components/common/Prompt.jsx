import { useSelector, useDispatch } from "react-redux"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

import { accept, close, selectAllPromptState } from "../../redux/reducers/prompt.slice";

const Prompt = () => {

    const dispatch = useDispatch()

    const prompt = useSelector(selectAllPromptState)

    const handleClose = () => {
        dispatch(close())
    };
    const handleAgree = () => {
        dispatch(accept())
    };

    return (
        <Dialog onClose={handleClose} open={prompt.show} sx={{"& .MuiDialog-paper": {p: 3}}}>
            <DialogTitle textAlign="center" sx={{fontWeight: "bold", display: "none"}}>
                {prompt?.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText textAlign="center" sx={{color: "black"}}>{prompt?.message}</DialogContentText>
            </DialogContent>
            <DialogActions dir="ltr" className="d-flex justify-content-center pb-0">
                <Button onClick={handleClose} fullWidth variant="text" sx={{ "&:hover": {bgcolor: "error.main" , color: "whitesmoke"}, color: "black"}}>{prompt.rejectBtnText}</Button>
                <Button onClick={handleAgree} fullWidth variant="contained">{prompt.acceptBtnText}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Prompt