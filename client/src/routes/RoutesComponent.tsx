import { Route, Routes } from 'react-router-dom';
import LogIn from '../components/login/Login';
import SignIn from '../components/signin/SignIn';
import PrivateRoutes from './PrivateRoutes';

const RoutesComponent = () => {
  // todo do routing here
  return (
    <Routes>
      <Route path="/log-in" element={<LogIn />}></Route>
      {/* signin */}
      <Route path="/sign-in" element={<SignIn />}></Route>

      <Route element={<PrivateRoutes />}>{/* private routes... */}</Route>
    </Routes>
  );
};

export default RoutesComponent;

/*
# Forms
- dynamic validation with html atttrbutes and pseudo-clases.
- outline reg/green depending if value is valid or not.
- real validation with a cutom hook
- forms are gonna use this cutsomHook only to know it safe to send post req request.
- a error message class that have the styles of a p error.
- render the message error from the sever on the form

### useForm
params: an with regex values. property same as input name and value is input regex

setValue: prop name, new value
const form


XIOS
*/