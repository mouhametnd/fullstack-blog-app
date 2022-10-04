import { Outlet } from 'react-router-dom';
import Header from './Header';

const Home = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Home;
