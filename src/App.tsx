import './App.css';
import { OidcProvider } from '@axa-fr/react-oidc';
import AppRoutes from './routes/AppRoutes.tsx';

const configuration = {
  client_id: "pres",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri: window.location.origin + "/authentication/silent-callback",
  scope: "openid profile email api offline_access", // offline_access scope allow your client to retrieve the refresh_token
  authority: "https://auth.ncats.nih.gov/_api/v2/auth/NCI-CCR-TEST",
  service_worker_only: false,
  demonstrating_proof_of_possession: false, // demonstrating proof of possession will work only if access_token is accessible from the client (This is because WebCrypto API is not available inside a Service Worker)
};

function App() {
  return (
    <OidcProvider configuration={configuration}>
      <AppRoutes/>
    </OidcProvider>
  );
}

export default App;
