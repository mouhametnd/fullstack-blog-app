import {  Route, Routes } from 'react-router-dom';
import LogIn from '../components/login/LogIn';
import SignIn from '../components/signin/SignIn';
import PrivateRoutes from './PrivateRoutes';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<PrivateRoutes />} />
    </Routes>
  );
};

export default RoutesComponent;
