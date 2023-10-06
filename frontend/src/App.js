import './App.css';
import {RouterProvider, createBrowserRouter,} from "react-router-dom";
import User from './Components/getuser/User';
import Adduser from './Components/adduser/Adduser';
import Edit from './Components/updateuser/Edit';
function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:<Adduser/>,
    },
    {
      path:"/update",
      element:"Update user page",
    },

    {
      path:"/edit/:id",
      element:<Edit/>,
    }
    
  ])
  return (
    <div className="App">
<RouterProvider router={route}></RouterProvider> 
   </div>
  );
}

export default App;
