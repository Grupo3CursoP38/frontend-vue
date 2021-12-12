export const token = (state) => {
  const exist = state.user.access && state.user.refresh ? true : false;
  return {
    exist,
    access: state.user.access,
    refresh: state.user.refresh,
  };
};

export const getId = (state) => {
  return state.user.id;
};

export const getTokens = (state) => {
  return state.user;
};
