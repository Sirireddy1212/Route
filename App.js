import logo from './logo.svg';
import './App.css';
import './Styles/NavBar2.css';
import NavBar2 from './E-Component/NavBar2';
import Home from './E-Component/Home';

import { BrowserRouter, createBrowserRouter,Link, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
// {
//   path:"/",
//   element:<Home/>,
// },
// {
//   path:"/about",
//   element:<h1>About</h1>,
// },
// ]);

function App() {
  return (
    <div className="App">
      <NavBar2/>
      <Home/>
     
    </div>
  );
}


export default App;
