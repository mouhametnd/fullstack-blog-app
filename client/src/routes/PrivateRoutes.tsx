import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import AllBlogs from '../components/allBlogs/AllBlogs';
import Dashboard from '../components/dashboard/Dashboard';
import Home from '../components/home/Home';
import MyBlogs from '../components/myBlogs/MyBlogs';
import { isAuthen } from '../utils/isAuthen';
const PrivateRoutes = () => {
  
  // if (!isAuthen()) return <Navigate to="/sign-in" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="all-blogs" element={<AllBlogs />}></Route>
          <Route path="my-blogs" element={<MyBlogs />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="" element={<Navigate to="all-blogs" />}></Route>
          <Route path="*" element={<Navigate to="/sign-in" />} />
        </Route>
      </Routes>
    </>
  );
};

export default PrivateRoutes;
