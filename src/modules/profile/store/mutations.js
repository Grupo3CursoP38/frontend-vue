import { getRental } from "../helpers/getRental";

export const cancelRental = (state, payload) => {
  state.rental = state.rental.filter(
    (rental) => rental.vehicle.id !== payload.vehicle.id
  );
};

export const cancelAccount = (state) => {
  state.user.is_active = false;
};

export const updateRentals = (state, payload) => {
  state.rental = payload;
};
export const updateProfile = (state, payload) => {
  state.user = payload;
};
export const setRental = async (state) => {
  const res = await getRental(JSON.parse(localStorage.getItem("setUser")).id);
  state.rental = res.filter((rental) => rental.is_active);
};
