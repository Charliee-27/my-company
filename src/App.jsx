
import './App.css'
import { createBrowserRouter } from "react-router-dom"
import Pagelayout from './components/layout/PageLayout'
import Home from './Home'
import Contact from './Contact'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Pagelayout/>,
    children: [
      {
        path:'/',
        index: true,
        element: <Home/>
      },

      {
        path: '/Contact',
        element: <Contact/>
      },
    ],
  },
]);

function App() {
    return  <RouterProvider router={router}/>
}

export default App
