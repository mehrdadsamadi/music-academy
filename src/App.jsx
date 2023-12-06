import { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux"
import { Button } from "@mui/material"

import {DataTable, Loading, Prompt} from './components/tools';
import { prompt } from './redux/reducers/prompt.slice';
import { loading } from './redux/reducers/loading.slice';

function App() {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(prompt({ message: "برای پاک کردن مطمعن هستید؟" }))
      .then(() => {
        console.log("resolve");
      })

    // dispatch(loading())
  }

  return (
    <>
      <Toaster position='bottom-center'/>
      <Prompt />
      <Loading />
      <DataTable />
      {/* <Button variant="outlined" onClick={handleClick}>سلام</Button> */}
    </>
  )
}

export default App
