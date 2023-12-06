/**
 * @summary Router to different pages
 * @author dallascrichmond
 */
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/Home" Component={Home} />
    </Routes>
  );
};

export default PageRouter;
