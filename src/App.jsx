import { useState } from 'react'

import { RouterProvider } from 'react-router-dom'
import router from './Routers/router'
function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
