import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import NavBar2 from './E-Component/NavBar2';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
{
  path:"/",
  element:<App />,
  children:[
    {
      path:"",element:<h2>user</h2>
    },
    {
      path:"users",element:<h3>users</h3>
    }
  ]
},
// {
//   path:"/contact",
//   element:<h1>Contact</h1>
// },
// {
//   path:"/about",
//   element:<h1>About</h1>,
// },
]);

root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
