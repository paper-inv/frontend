import instance from "../index";

const authService = {
  async profile() {
    return instance.get("accounts/profile");
  },
  async signin(payload) {
    return instance.post("auth/auth", payload);
  },
};

export default Object.freeze(authService);
