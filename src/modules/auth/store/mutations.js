// export const mutations = (state) => {};

export const reset = (state, payload) => {
  state.form = payload;
};

export const setUser = (state, payload) => {
  state.user = payload;
};
