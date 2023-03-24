const EIGHTSECONDS_AUTH__TOKEN = "8SECONDS_AUTH_TOKEN";

class Storage {
  static setToken(accessToken: string) {
    sessionStorage.setItem(EIGHTSECONDS_AUTH__TOKEN, accessToken);
  }

  static getToken() {
    return sessionStorage.getItem(EIGHTSECONDS_AUTH__TOKEN);
  }

  static clearToken() {
    return sessionStorage.clear();
  }
}

Object.freeze(Storage);
export default Storage;
