// export const actions = async ({ commit }) => {};

export const setVehicles = async ({ commit }, payload) => {
  commit("setVehicles", payload);
};
export const setVehicle = async ({ commit }, payload) => {
  commit("setVehicle", payload);
};
