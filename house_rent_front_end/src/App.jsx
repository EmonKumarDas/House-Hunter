import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import route from './Router/page_route/Route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div className="">
      <RouterProvider router={route}></RouterProvider>
    </div>
    </>
  )
}

export default App
