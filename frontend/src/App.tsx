import type { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';

function App(): ReactElement {
	const router = createBrowserRouter([
		{
			path: '/',
			index: true,
			element: <Home />,
		},
		{
			path: '/user',
			element: <Create />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
