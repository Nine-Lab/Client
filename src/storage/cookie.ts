import Cookie from "cookie-universal";

const cookie = Cookie();
const EIGHT_SECONDS_AUTH_REFRESHTOKEN = "8SECONDS_AUTH_REFRESH_TOKEN";

class CookieStorage {
  static setToken(token: string) {
    cookie.set(EIGHT_SECONDS_AUTH_REFRESHTOKEN, token, {
      sameSite: true,
    });
  }

  static getToken() {
    return cookie.get(EIGHT_SECONDS_AUTH_REFRESHTOKEN);
  }

  static clearToken() {
    cookie.remove(EIGHT_SECONDS_AUTH_REFRESHTOKEN);
  }
}

Object.freeze(CookieStorage);
export default CookieStorage;
