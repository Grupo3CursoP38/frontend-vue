// export const actions = async ({ commit }) => {};

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
