import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Index from '../layout/index';
import First from '../pages/F';
import Home from '../pages/index';
import Setting from '../pages/setting/index'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [{
            // index: true,
            path: '/',
            element: <Home />,
        },
        {
            path: '/f',
            element: <First />,
        },
        ]
    },
    {
        path: '/set',
        element: <Setting />,
        id: 'setting'
    }
]);
const AppRouter = () => {
    return (
        <RouterProvider router={Router} />
    )
}
export default AppRouter;