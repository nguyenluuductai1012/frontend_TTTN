import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsQLKHACHHANG = Loadable(lazy(() => import('views/utilities/KHACHHANG')));
const UtilsDIENKE = Loadable(lazy(() => import('views/utilities/DIENKE')));
const UtilsHOADON = Loadable(lazy(() => import('views/utilities/HOADON')));
const UtilsBANGIACU = Loadable(lazy(() => import('views/utilities/BANGIACU')));
const UtilsBANGGIAMOI = Loadable(lazy(() => import('views/utilities/BANGGIAMOI')));
const UtilsTiendien = Loadable(lazy(() => import('views/utilities/Tiendien')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-qlkh',
                    element: <UtilsQLKHACHHANG />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-qldk',
                    element: <UtilsDIENKE />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-qlhd',
                    element: <UtilsHOADON />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'banggiamoi',
                    element: <UtilsBANGGIAMOI />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'banggiacu',
                    element: <UtilsBANGIACU />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-tiendien',
                    element: <UtilsTiendien />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
