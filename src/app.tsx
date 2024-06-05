import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import stylesheets from './app.module.scss';
import './app.scss';
import 'semantic-ui-css/semantic.min.css';
import Root from './features/layout/root';
import Login from './features/login/login';
import WorklogsApprovals from './features/worklogs-approvals/worklogs-approvals';
import WorklogsRecords from './features/worklogs-records/worklogs-records';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'approvals',
                element: <WorklogsApprovals />
            }, {
                path: 'records/:employeeId',
                element: <WorklogsRecords />
            }
        ]
    }
])

const queryClient = new QueryClient();

const App = (
    <div className={stylesheets.app}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </div>
)

export default App;
