/**
 * @summary Router to different pages
 * @author dallascrichmond
 */
import { Routes, Route } from 'react-router-dom';

import { Home, Login } from '../pages';

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/" Component={Home} />
    </Routes>
  );
};

export default PageRouter;
