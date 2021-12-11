import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

export async function getCancelAccount(id) {
  try {
    const result = await apolloClient.mutate({
      mutation: gql`
        mutation DeactiveUser($userId: Int!) {
          deactiveUser(userId: $userId)
        }
      `,
      variables: {
        userId: id,
      },
    });

    return result;
  } catch (error) {
    return { error, message: "Error al desactivar el usuario", status: 400 };
  }
}
