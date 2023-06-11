import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<Home />}>
      <Component {...props}/>
    </Suspense>
  );

const Papershelf =  Loadable(lazy(() => 
  import("../pages/Papershelf")
  .then(module => ({default: module.Papershelf}))
));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/papershelf",
    element: <Papershelf />
  }
]);

export { routes }; 