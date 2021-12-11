import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

export async function getUpdate(data, id) {
  try {
    const result = await apolloClient.mutate({
      mutation: gql`
        mutation UpdateUser($user: UserPartialUpdate!) {
          updateUser(user: $user) {
            email
            lastname
            name
            phone
            birthdate
          }
        }
      `,
      variables: {
        user: { id, ...data },
      },
    });

    return result.data.updateUser;
  } catch (error) {
    return { error, message: "Error al actualizar el usuario", status: 400 };
  }
}
