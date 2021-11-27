export const cancelRental = async ({ commit }, payload) => {
  commit("cancelRental", payload);
};
export const cancelAccount = async ({ commit }) => {
  commit("cancelAccount");
};
