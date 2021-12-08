export const reset = async ({ commit }) => {
  commit("reset", {
    name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    check: false,
  });
};

export const setUser = async ({ commit }, payload) => {
  commit("setUser", payload);
};
