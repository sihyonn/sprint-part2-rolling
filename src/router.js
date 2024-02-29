import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import routes from '@constants/routes';

import TestPage from '@pages/TestPage';
import Sh from '@pages/Sh';
import Hi from '@pages/Hi';
import Yj from '@pages/Yj';
import Choi from '@pages/Choi';

import Layout from '@components/template/Layout';
import MainLayout from '@components/template/MainLayout';

import MainPage from '@pages/MainPage';
import PaperListPage from '@pages/PaperListPage';
import PaperViewerPage from '@pages/PaperViewerPage';
import CreatePaperPage from '@pages/CreatePaperPage';
import WirteMessagePage from '@pages/WirteMessagePage';
import PaperEditPage from '@pages/PaperEditPage';
import PaperCreationLayout from '@components/template/PaperCreationLayout';

const router = createBrowserRouter([
  /**
   * 진짜 찐 프로젝트 페이지
   */
  {
    path: '',
    element: <Layout />,
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
            element: <WirteMessagePage />,
          },
        ],
      },

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

  // 개인 테스트용 페이지
  {
    path: '/test',
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
