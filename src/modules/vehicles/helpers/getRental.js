import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

export async function getRental(data) {
  try {
    const result = await apolloClient.mutate({
      mutation: gql`
        mutation CreateRental(
          $rental: RentalInput!
          $vehicle: VehiclePartialUpdate!
        ) {
          createRental(rental: $rental) {
            id
            date_finish
            date_start
            user_id
            vehicle_id
            is_active
          }
          updateVehicle(vehicle: $vehicle) {
            in_use
          }
        }
      `,
      variables: {
        rental: data,
        vehicle: {
          in_use: true,
          id: data.vehicle_id,
        },
      },
    });

    console.log(result);

    return result.data.createRental;
  } catch (error) {
    return { error, message: "Error al crear la renta", status: 400 };
  }
}
