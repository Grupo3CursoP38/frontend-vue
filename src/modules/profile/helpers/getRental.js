import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

export async function getRental(id) {
  try {
    const result = await apolloClient.query({
      query: gql`
        query GetRentals {
          getRentals {
            id
            date_finish
            date_start
            vehicle_id
            user_id
            is_active
          }
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

    const { getRentals, getVehicles } = result.data;

    const rentals = getRentals.map((rental) => {
      const vehicle = getVehicles.find(
        (vehicle) => vehicle.id === rental.vehicle_id
      );
      return {
        ...rental,
        vehicle,
      };
    });

    return rentals.filter((rental) => rental.user_id === id);
  } catch (error) {
    return { error, message: "Error al obtener las rentas", status: 400 };
  }
}
