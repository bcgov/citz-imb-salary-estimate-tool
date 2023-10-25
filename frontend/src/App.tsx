/* eslint-disable react/button-has-type */
import { useKeycloak } from '@bcgov/kc-react';

function App() {
  const { login, logout, state } = useKeycloak();

  const user = state?.userInfo;
  return (
    <>
      <div>Salary Estimate Tool</div>
      {user ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => login({ idpHint: 'idir' })}>Login</button>
      )}
    </>
  );
}

export default App;
