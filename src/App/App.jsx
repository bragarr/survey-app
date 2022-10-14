import { BrowserRouter, Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { MainRoutes } from '../Routes';


export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Outlet />
        <MainRoutes />
      </div>
    </BrowserRouter>
  );
};
