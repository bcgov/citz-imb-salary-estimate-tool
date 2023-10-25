import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { KeycloakProvider } from '@bcgov/kc-react';

/** Can add prop backendURL to keycloak provider if you don't have proxy set up */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KeycloakProvider>
      <App />
    </KeycloakProvider>
  </React.StrictMode>
);
