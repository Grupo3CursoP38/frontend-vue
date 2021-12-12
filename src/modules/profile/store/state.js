export default () => ({
  user: {
    id: null,
    name: "",
    lastname: "",
    email: "",
    phone: "",
    birthdate: "",
    password: "",
    is_active: false,
  },
  rental: [
    {
      user: {
        id: null,
        name: "",
        lastname: "",
        email: "",
        phone: "",
        birthdate: "",
        is_active: false,
      },
      date_start: "",
      date_finish: "",
      is_active: false,
      vehicle: {
        id: null,
        name: "",
        short_description: "",
        long_description: "",
        color: "",
        img_url: "",
        type: "",
        in_use: false,
        is_active: false,
      },
    },
  ],
});
