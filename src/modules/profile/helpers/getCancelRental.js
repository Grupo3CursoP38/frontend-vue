import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

export async function getCancelRental(id) {
  try {
    const result = await apolloClient.mutate({
      mutation: gql`
        mutation FinishRental($rental: RentalFinish!) {
          finishRental(rental: $rental) {
            id
            date_finish
            date_start
            user_id
            vehicle_id
            is_active
          }
        }
      `,
      variables: {
        rental: {
          id,
          is_active: false,
        },
      },
    });

    return result.data.updateUser;
  } catch (error) {
    return { error, message: "Error al cancelar la renta", status: 400 };
  }
}
