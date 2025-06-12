
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
// import Body from './components.js/Body';
import Login from './components.js/Login';
import Browse from './components.js/Browse';
import { RouterProvider } from 'react-router-dom';
import Error from './components.js/Error';

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
    errorElement:<Error/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },
  
])
function App() {
  return (
    <div className="App">
    < RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
