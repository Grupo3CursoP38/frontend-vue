export default () => ({
  user: {
    id: 1,
    name: "Alex",
    lastname: "ibarra",
    email: "email@gmail.com",
    phone: "3254628192",
    birthdate: "2020-08-12",
    password: "",
    is_active: true,
  },
  rental: [
    {
      user: {
        id: 1,
        name: "Alex",
        lastname: "ibarra",
        email: "email@gmail.com",
        phone: "3254628192",
        birthdate: "3254628192",
        is_active: true,
      },
      date_start: "2021-08-08",
      date_finish: "2021-08-09",
      is_active: true,
      vehicle: {
        id: 2,
        name: "deportiva test",
        short_description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        long_description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sint culpa itaque quisquam. Facere mollitia hic molestias magni rerum exercitationem modi sit. Animi blanditiis consequuntur illo iure autem, nihil voluptates!",
        color: "rojo",
        img_url:
          "https://http2.mlstatic.com/D_874264-MCO43127790355_082020-I.jpg",
        type: "bicicleta",
        in_use: true,
        is_active: true,
      },
    },
  ],
});
