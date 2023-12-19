import { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux"
import { Button } from "@mui/material"

import { ClassTimeTable, DataTable, Loading, Prompt } from './components/tools';
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

  const data = [
    {
      id: 19,
      student_id: 2,
      class_id: 2,
      day: 1,
      time: "18:00",
      week: 1,
      remaining_amount: 1225000,
      academy_id: 1,
      created_at: "2023-12-08T19:43:28.000000Z",
      updated_at: "2023-12-09T19:53:25.000000Z",
      deleted_at: null,
      actionsRoutes: {
        edit: "http://127.0.0.1:8000/academy/class/edit/19",
        delete: "http://127.0.0.1:8000/academy/class/delete/19"
      }
    },
    {
      id: 20,
      student_id: 2,
      class_id: 2,
      day: 1,
      time: "18:00",
      week: 1,
      remaining_amount: 1225000,
      academy_id: 1,
      created_at: "2023-12-08T19:43:28.000000Z",
      updated_at: "2023-12-09T19:53:25.000000Z",
      deleted_at: null,
      actionsRoutes: {
        edit: "http://127.0.0.1:8000/academy/class/edit/20",
        delete: "http://127.0.0.1:8000/academy/class/delete/20"
      }
    },
    {
      id: 21,
      student_id: 2,
      class_id: 2,
      day: 1,
      time: "18:00",
      week: 1,
      remaining_amount: 1225000,
      academy_id: 1,
      created_at: "2023-12-08T19:43:28.000000Z",
      updated_at: "2023-12-09T19:53:25.000000Z",
      deleted_at: null,
      actionsRoutes: {
        edit: "http://127.0.0.1:8000/academy/class/edit/21",
        delete: "http://127.0.0.1:8000/academy/class/delete/21"
      }
    },
  ]
  const defaultHeaders = ["id", "student_id", "class_id", "day", "time", "week", "remaining_amount", "academy_id", "created_at", "updated_at", "deleted_at"]

  const test = {
    "فرزاد صمدی مقدم": {
      data: [
        {
          id: 3,
          time: "17:00",
          firstname: "asfgasgasgasg",
          lastname: "asgasgasga",
          day: "دوشنبه",
          exception_day: null,
          exception_time: null,
          semester_sessions: 8,
          semester_price: 1400000,
          academy: {
            id: 1,
            name: "آموزشگاه موسیقی خیام",
            email: "samadifarzad28@gmail.com",
            username: "khayyammusic"
          }
        },
        {
          id: 2,
          time: "18:30",
          day: "دوشنبه",
          firstname: "علی",
          lastname: "حئز",
          exception_day: null,
          exception_time: null,
          semester_sessions: 8,
          semester_price: 1400000,
          academy: {
            id: 1,
            name: "آموزشگاه موسیقی خیام",
            email: "samadifarzad28@gmail.com",
            username: "khayyammusic"
          }
        }
      ]
    },
    "امیر صفری": {
      data: [
        {
          id: 1,
          time: "20:30",
          day: "دوشنبه",
          firstname: "علی",
          lastname: "حئز",
          exception_day: "2023-12-17",
          exception_time: "19:00",
          semester_sessions: 8,
          semester_price: 1400000,
          academy: {
            id: 1,
            name: "آموزشگاه موسیقی خیام",
            email: "samadifarzad28@gmail.com",
            username: "khayyammusic"
          }
        }
      ]
    }
  }

  return (
    <>
      <Toaster position='bottom-center' />
      <Prompt />
      <Loading />
      {/* <DataTable data={data} defaultHeaders={defaultHeaders}/> */}
      <ClassTimeTable data={test} />
      {/* <Button variant="outlined" onClick={handleClick}>سلام</Button> */}
    </>
  )
}

export default App
