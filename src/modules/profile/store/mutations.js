export const cancelRental = (state, payload) => {
  state.rental.forEach((rental) =>
    rental.vehicle.id === payload.vehicle.id ? (rental.is_active = false) : null
  );
};

export const cancelAccount = (state) => {
  state.user.is_active = false;
};
