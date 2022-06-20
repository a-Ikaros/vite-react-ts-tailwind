import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, Link } from 'react-router-dom';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));
const Ailen = lazy(() => import('~/components/mydemo/Demo'));
const Test = lazy(() => import('~/components/Test/Test'));

function Layout() {
  return (
    <div>
      <nav className="p-4 flex items-center justify-between">
        <span><Link to="/">首页</Link></span>
        <span>
          <Link to="/demo">Demo</Link>
        </span>
        <span>
          <Link to="/test">Test</Link>
        </span>
      </nav>
      <Outlet />
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
        {
          path: '/demo',
          element: <Ailen />,
        },
        {
          path: '/test',
          element: <Test />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
