import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Rooms from './pages/Rooms'
import Events from './pages/Events'
import RoomsPage from './pages/RoomsPage'
import RoomsImages from './pages/RoomsImages'
import Facilities from './pages/Facilities'
import AnimitiesDetails from './pages/AnimitiesDetails'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/rooms',
        element: <RoomsPage />
      },
       {
        path: '/rooms/details/:roomKey',
        element: <RoomsImages />
      },
      {
        path: '/events',
        element: <Events />
      },
       {
        path: '/animitiesDetails/:slug',
        element: <AnimitiesDetails />
      },
    ]
    // children: [
  }
])

const App = () => {
  return (

    <RouterProvider router={appRouter} />

  )
}

export default App

