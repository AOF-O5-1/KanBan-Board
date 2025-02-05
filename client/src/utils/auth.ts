import { JwtPayload, jwtDecode } from 'jwt-decode';
//import { UserData } from '../interfaces/UserData';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    console.log(jwtDecode(this.getToken()));
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded?.exp && decoded?.exp < Date.now() / 1000) {
        return true;
      }
    } catch (err) { 
      return false;
    }
  }

  

  getToken(): string {
    // TODO: return the token
    const loggedUser = localStorage.getItem('id_token') || '';
    console.log('loggedUser: ', loggedUser);
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('id_token', idToken);
    console.log('hello', idToken)
    // TODO: redirect to the home page
   
   window.location.assign('/');
   
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('id_token');
    // TODO: redirect to the login page
    window.location.assign('/');
  }
}

export default new AuthService();
