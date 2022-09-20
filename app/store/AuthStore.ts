import { action, makeObservable, observable } from "mobx";

class AuthStore {
    AuthSettings = {
        auth: true,
    }
    constructor() {
        makeObservable(this, {
            AuthSettings: observable,
            Login: action,
            Logout: action
        })
    }
    Login() {
        this.AuthSettings = { auth: true }
    };
    Logout() {
        this.AuthSettings = { auth: false }
    };
}

export default new AuthStore()