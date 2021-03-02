
// model stores all the data that makes up a user, and checks token validation
export class User {
  constructor(
    public name: string,
    private _token: string
    // public email: string,
    // public id: string,
    // private _token: string,
    // private _tokenExpirationDate: Date
  ) {}

  // allows app to get the token and check its validity
  get token() {
    // checks to see if a token exists or if it does exist, it checks it against
    // the current date/time to make sure it is still valid
    // if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
    if (!this._token) {
      return null;
    }
    return this._token;
  }
}
