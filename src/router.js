import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import TestPage from '@pages/TestPage';
import Sh from '@pages/Sh';
import Hi from '@pages/Hi';
import Yj from '@pages/Yj';
import Choi from '@pages/Choi';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TestPage />,
  },
  {
    path: '/sh',
    element: <Sh />,
  },
  {
    path: '/hi',
    element: <Hi />,
  },
  {
    path: '/yj',
    element: <Yj />,
  },
  {
    path: '/choi',
    element: <Choi />,
  },
]);

export default router;
