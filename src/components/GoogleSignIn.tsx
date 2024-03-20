import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function GoogleSignIn() {
  return (
    <GoogleLogin
  onSuccess={credentialResponse => {
    const decoded = jwtDecode(credentialResponse?.credential?credentialResponse?.credential:" ");
    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
  );
}

export default GoogleSignIn;
