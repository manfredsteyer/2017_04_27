export class AuthService {
  userName: string;

  login() {
    this.userName = 'Max';
  }

  logout() {
    this.userName = null;
  }
}
