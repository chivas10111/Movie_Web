// import BASE_URL from './utils/api'
// import options from './utils/option'

// export function App() {
//     fetch(`${BASE_URL}search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }

import './App.css';
import { BrowserRouter, Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import private_routes from './routes/routes'
import public_routes from './routes/routes'
import DefaultLayout from './DefaultLayout';
import LoginPage from './components/LoginPage/LoginPage';

function App() {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const location = useLocation();
    
    const { accessToken, userId } = useSelector((state) => state.auth);
    useEffect(() => {
      if (
        !localStorage.getItem("accessToken") ||
        !localStorage.getItem("userId")
      ) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userId", userId);
      }
    }, [accessToken, userId]);

    if(!token){
      return <LoginPage/>;
    } else {

      return (
        <>
          <Routes>
            {private_routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<DefaultLayout>{route.element}</DefaultLayout>}
              />
            ))}
            {public_routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<DefaultLayout>{route.element}</DefaultLayout>}
              />
            ))}
          </Routes>
        </>
      );
    }
}


export default App;