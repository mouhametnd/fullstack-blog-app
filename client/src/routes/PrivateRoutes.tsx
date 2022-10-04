import { Routes, Route, Navigate } from 'react-router-dom';
import AllBlogs from '../components/outlets/AllBlogs';
import Home from '../components/others/Home';
import Dashboard from '../components/outlets/Dashboard';
import UserBlogs from '../components/outlets/UserBlogs';
import { isAuthen } from '../utils/isAuthen';
const PrivateRoutes = () => {
  if (!isAuthen()) return <Navigate to="/sign-in" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="all-blogs" element={<AllBlogs />}></Route>
          <Route path="my-blogs" element={<UserBlogs />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="" element={<Navigate to="all-blogs" />}></Route>
          <Route path="*" element={<Navigate to="/sign-in" />} />
        </Route>
      </Routes>
    </>
  );
};

export default PrivateRoutes;
