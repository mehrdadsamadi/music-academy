import toast, { Toaster } from 'react-hot-toast';
import {useDispatch} from "react-redux"

import {Button} from "@mui/material"
import Prompt from './components/common/Prompt';
import { open } from './redux/reducers/prompt.slice';

function App() {

  const dispatch = useDispatch()
  
  const handleClick = () => {
    toast("عالیه")
    dispatch(open({ message: "برای پاک کردن مطمعن هستید؟"}))
  }

  return (
    <>
      <Toaster 
        position='bottom-center'
      />
      <Prompt />
      <Button variant="outlined" onClick={handleClick}>hello</Button>
    </>
  )
}

export default App
