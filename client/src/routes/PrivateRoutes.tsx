import { Routes, Outlet, Navigate } from 'react-router-dom';
const PrivateRoutes = () => {
  // use auth and render or redirect
  // conditional
  return (
    <>
    {/* todo some default components such as header, Nav, and Main that have nested components */}
      <Routes>
        <Navigate to="/log-in"></Navigate>
        <Outlet></Outlet>
      </Routes>
    </>
  );
};

export default PrivateRoutes;
