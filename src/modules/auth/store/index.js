import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

export const authModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
