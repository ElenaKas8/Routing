import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NotFoudPage = () => {
  const navigate=useNavigate()
  const location=useLocation()

  //объект lacation хранит информацию о текущей странице
//интервальная задержка для переадресации страницы
//useNavigate перенаправляет на другую страницу,функцию можно поместить куда угодно
// setTimeout(()=>{navigate('/')},3000)
  
  return (
    <div className='content'>
      <h2>404 ERROR! (not found)</h2>
      <img width={300} src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png" alt="error page"/>
   <button onClick={() => navigate(-1)}>Go back</button>
   <button onClick={() => navigate('/')}>Go back</button>
    </div>
  )
}

export default NotFoudPage