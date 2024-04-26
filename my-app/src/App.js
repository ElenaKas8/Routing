
// React-router-dom (новая концепция работы над маршрутизацией)
// В новой версии настройки роутов выносятся в отдельный файл 
// в объекте router (router.js)

import { RouterProvider } from "react-router-dom"
import './App.css'
import { router } from "../src/components/router"

function App(){
    return <RouterProvider router={router}/>
}

export default App
