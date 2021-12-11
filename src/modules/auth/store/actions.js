import gql from "graphql-tag";
import { apolloClient } from "@/apollo";

export const reset = async ({ commit }) => {
  commit("reset", {
    name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    check: false,
  });
};

export const setUser = async ({ commit }, payload) => {
  commit("setUser", payload);
  const result = await apolloClient.mutate({
    mutation: gql`
      query GetUserById($userId: Int!) {
        getUserById(userId: $userId) {
          email
          name
          lastname
          phone
          birthdate
        }
      }
    `,
    variables: {
      userId: payload.id,
    },
  });

  localStorage.setItem(
    "setUser",
    JSON.stringify({
      ...JSON.parse(localStorage.getItem("setUser")),
      data: {
        ...result.data.getUserById,
        is_active: true,
      },
    })
  );
};
