export const cancelRental = async ({ commit }, payload) => {
  commit("cancelRental", payload);
};
export const cancelAccount = async ({ commit }) => {
  commit("cancelAccount");
};

export const updateProfile = async ({ commit }, payload) => {
  commit("updateProfile", payload);
};

export const updateRentals = async ({ commit }, payload) => {
  commit("updateRentals", payload);
};

export const setRental = async ({ commit }) => {
  commit("setRental");
};
