// export const mutations = (state) => {};

export const reset = (state, payload) => {
  state.form = payload;
};

export const setUser = (state, payload) => {
  state.user = {
    access: payload.access,
    refresh: payload.refresh,
    id: payload.id,
    data: {},
  };
};
