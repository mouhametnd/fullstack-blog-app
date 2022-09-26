import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Home from '../components/home/Home';
import { isAuthen } from '../utils/isAuthen';
const PrivateRoutes = () => {
  if (!isAuthen()) return <Navigate to="/sign-in" />;
  return (  
    <>
      {/* todo some default components such as header, Nav, and Main that have nested components */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="all-blogs"></Route>
          <Route path='*' element={<Navigate to="all-blogs" />}></Route>
          <Route index element={<Navigate to="all-blogs" />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default PrivateRoutes;
