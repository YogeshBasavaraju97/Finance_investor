import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import CompanyPage from '../CompanyPage';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'company/:ticker', element: <CompanyPage /> },
    ],
  },
]);
