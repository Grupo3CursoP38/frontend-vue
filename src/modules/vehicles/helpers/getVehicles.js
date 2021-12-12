import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

export async function getVehicles() {
  try {
    const result = await apolloClient.query({
      query: gql`
        query GetRentals {
          getVehicles {
            id
            type
            name
            short_description
            long_description
            color
            in_use
            img_url
          }
        }
      `,
    });

    const { getVehicles } = result.data;

    const vehicles = getVehicles.filter((vehicle) => vehicle.in_use === false);

    console.log(vehicles);
    return vehicles;
  } catch (error) {
    return { error, message: "Error al obtener los vehiculos", status: 400 };
  }
}
