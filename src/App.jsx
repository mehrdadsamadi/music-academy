import { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux"
import { Button } from "@mui/material"

import Prompt from './components/common/Prompt';
import { prompt } from './redux/reducers/prompt.slice';

function App() {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(prompt({ message: "برای پاک کردن مطمعن هستید؟" }))
      .then(() => {
        console.log("resolve");
      })
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
