import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import routes from '@constants/routes';

import Layout from '@components/template/Layout';
import MainLayout from '@components/template/MainLayout';
import PaperCreationLayout from '@components/template/PaperCreationLayout';
import PaperLayout from '@components/template/PaperLayout';

import MainPage from '@pages/MainPage';
import PaperListPage from '@pages/PaperListPage';
import PaperViewerPage from '@pages/PaperViewerPage';
import PaperEditPage from '@pages/PaperEditPage';
import CreatePaperPage from '@pages/CreatePaperPage';
import WriteMessagePage from '@pages/WriteMessagePage';
import ErrorPage from '@pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        element: <MainLayout />,
        children: [
          // 매인
          {
            path: routes.home,
            element: <MainPage />,
          },
          // 페이퍼목록(캐러셀)
          {
            path: routes.list,
            element: <PaperListPage />,
          },
        ],
      },
      {
        element: <PaperCreationLayout />,
        children: [
          // 페이퍼 생성(to)
          {
            path: routes.post,
            element: <CreatePaperPage />,
          },
          // 메세지 작성(from)
          {
            path: `${routes.post}/:id/message`,
            element: <WriteMessagePage />,
          },
        ],
      },
      {
        element: <PaperLayout />,
        children: [
          // 생성된 메세지 목록
          {
            path: `${routes.post}/:id`,
            element: <PaperViewerPage />,
          },
          // 생성된 메세지 수정
          {
            path: `${routes.post}/:id/edit`,
            element: <PaperEditPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
