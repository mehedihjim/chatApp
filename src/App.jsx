import Signup from './pages/Signup';
import Login from './pages/Login';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Rootlayout from './layout/Rootlayout';
import Dashboard from './pages/Dashboard';
import Message from './pages/Message';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Rootlayout />}
    >
      <Route index element={<Login />}></Route>
      <Route path="/message" element={<Message />}></Route>
      <Route path="/notifications" element={<Notifications />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Route >
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
