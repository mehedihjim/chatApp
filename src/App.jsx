import Signup from './pages/Signup';
import Login from './pages/Login';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Message from './pages/Message';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Rootlayout from './layout/Rootlayout';
import Support from './pages/Support';
import Funds from './pages/Funds';
import MiniGames from './pages/MiniGames';
import Events from './pages/Events';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route
        path="/"
        element={<Rootlayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path='/messages' element={<Message />}></Route>
        <Route path='/notifications' element={<Notifications />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/help-&-supports' element={<Support />}></Route>
        <Route path='/fundraisers' element={<Funds />}></Route>
        <Route path='/mini-games' element={<MiniGames />}></Route>
        <Route path='/events' element={<Events />}></Route>
      </Route >
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
