import { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CompanyProfile from '../Components/CompanyProfile/CompanyProfile';
import IncomeStatement from '../Components/IncomeStatement/IncomeStatement';
import DesignGuide from '../DesignGuid/DesignGuide';
import CompanyPage from '../Pages/CompanyPage/CompanyPage';

import HomePage from '../Pages/HomePage/HomePage';
import SearchPage from '../Pages/SearchPage/SearchPage';
import Table from '../Table/Table';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'designGuide', element: <DesignGuide /> },
      {
        path: 'company/:ticker',
        element: <CompanyPage />,
        children: [
          { path: 'Company-profile', element: <CompanyProfile /> },
          { path: 'Income-statement', element: <IncomeStatement /> },
        ],
      },
    ],
  },
]);
