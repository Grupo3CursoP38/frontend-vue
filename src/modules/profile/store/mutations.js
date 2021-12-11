export const cancelRental = (state, payload) => {
  state.rental.forEach((rental) =>
    rental.vehicle.id === payload.vehicle.id ? (rental.is_active = false) : null
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
