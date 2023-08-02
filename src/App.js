import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageNotFound from "./pages/pagenotfound/PageNotFound";
function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={user?<Register/>:<Home/>} />
        <Route path="/login" element={user?<Login/>:<Home/>} />
        <Route path="/write" element={user?<Write/>:<Register/>} />
        <Route path="/settings" element={user?<Settings/>:<Register/>} />
        <Route path="/post/:postId" element={user?<Single/>:<Register/>} />
        <Route path="/logout" element={user?<Login/>:<Register/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
