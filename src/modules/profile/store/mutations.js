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
