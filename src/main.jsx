import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"

import { router } from "./routes"
import { store } from "./redux/store"

import "../public/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
