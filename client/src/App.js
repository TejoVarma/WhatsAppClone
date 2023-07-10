import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = "505707533772-flhvjfacsk067pl9v6372q1r14ehjhuj.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
