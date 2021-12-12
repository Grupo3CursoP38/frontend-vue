import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

export async function getCancelRental(id, vehicle_id) {
  try {
    const result = await apolloClient.mutate({
      mutation: gql`
        mutation FinishRental(
          $rental: RentalFinish!
          $vehicle: VehiclePartialUpdate!
        ) {
          finishRental(rental: $rental) {
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
        rental: {
          id,
          is_active: false,
        },
        vehicle: {
          in_use: false,
          id: vehicle_id,
        },
      },
    });

    return result.data.updateUser;
  } catch (error) {
    return { error, message: "Error al cancelar la renta", status: 400 };
  }
}
