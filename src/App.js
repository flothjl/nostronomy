import { NostrProvider } from 'nostr-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Nostree from './components/Nostree';
import Error from './components/Error';
import Profile from './routes/Profile';
import Manage from './routes/Manage';
import { relayUrlState } from './recoilState';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Profile />,
    errorElement: <Error />,
  },
  {
    path: '/manage',
    element: <Manage />,
    errorElement: <Error />,
  },
]);

function App() {
  const [relayUrls] = useRecoilState(relayUrlState);

  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <Nostree loading={false}>
        <RouterProvider router={router} />
      </Nostree>
    </NostrProvider>
  );
}

export default App;
