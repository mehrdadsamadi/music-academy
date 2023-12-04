import { useSelector, useDispatch } from "react-redux"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

import { close, selectAllPromptState } from "../../redux/reducers/prompt.slice";

const Prompt = () => {

    const dispatch = useDispatch()

    const prompt = useSelector(selectAllPromptState)

    const handleClose = () => {
        dispatch(close())
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
                <Button onClick={handleClose} fullWidth variant="text" sx={{ "&:hover": {bgcolor: "error.main" , color: "whitesmoke"}, color: "black"}}>{prompt.closeBtnText}</Button>
                <Button onClick={handleClose} fullWidth variant="contained">{prompt.agreeBtnText}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Prompt