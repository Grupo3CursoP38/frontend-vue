<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead class="bg-red-400">
            <tr>
              <th
                class="
                  border-b-2
                  font-body
                  border
                  px-8
                  py-4
                  text-white text-center
                "
              >
                Producto
              </th>
              <th
                class="
                  border-b-2
                  font-body
                  border
                  px-8
                  py-4
                  text-white text-center
                "
              >
                Categoría
              </th>
              <th
                class="
                  border-b-2
                  font-body
                  border
                  px-8
                  py-4
                  text-white text-center
                "
              >
                Cantidad
              </th>
              <th
                class="
                  border-b-2
                  font-body
                  border
                  px-8
                  py-4
                  text-white text-center
                "
              >
                Precio unidad
              </th>
            </tr>
          </thead>
          <tbody class="bg-yellow-100">
            <tr>
              <td
                class="
                  px-5
                  py-5
                  border-b border-gray-200
                  bg-white
                  text-sm
                  w-2/5
                "
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                    <img class="w-full" src="@/static/404.svg" alt="" />
                  </div>
                  <div class="ml-3">
                    <p
                      class="
                        text-gray-900
                        whitespace-no-wrap
                        font-bold
                        italic
                        text-md
                      "
                    >
                      IphoneX
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p
                  class="
                    text-gray-900
                    whitespace-no-wrap
                    text-center
                    font-medium
                    text-md
                  "
                >
                  Teléfonos
                </p>
              </td>
              <td
                class="
                  px-5
                  py-5
                  border-b border-gray-200
                  bg-white
                  text-sm text-center
                "
              >
                <span
                  class="
                    px-2
                    text-md
                    py-0
                    my-0
                    cursor-pointer
                    bg-purple-400
                    hover:bg-purple-500
                    text-gray-50
                    rounded-lg
                  "
                  >+</span
                >
                <span class="px-2 font-bold text-md">4</span>
                <span
                  class="
                    px-2
                    text-md
                    py-0
                    my-0
                    cursor-pointer
                    bg-purple-400
                    hover:bg-purple-500
                    text-gray-50
                    rounded-lg
                  "
                  >-</span
                >
              </td>
              <td
                class="
                  px-5
                  py-5
                  border-b border-gray-200
                  bg-white
                  text-sm
                  w-2/5
                "
              >
                <div class="flex items-center justify-center">
                  <div class="mr-3">
                    <p
                      class="
                        text-gray-900
                        whitespace-no-wrap
                        text-right
                        font-bold
                        text-md
                      "
                    >
                      $50
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <table class="table-fixed flex justify-center lg:justify-end m-10">
      <thead>
        <tr></tr>
      </thead>
      <tbody class="p-4 bg-blue-50 rounded-xl">
        <tr>
          <td class="font-bold">Subtotal</td>
          <td class="pl-36">$998</td>
        </tr>
        <tr>
          <td class="font-bold">Envío</td>
          <td class="pl-36">$20</td>
        </tr>
        <tr>
          <td class="pt-12 text-3xl font-bold">Total</td>
          <td class="pl-36 pt-12 text-3xl font-bold">$118</td>
        </tr>
        <button
          class="
            bg-purple-700
            hover:bg-purple-500
            text-white
            font-bold
            py-2.5
            px-5
            rounded
            w-full
            mt-8
            duration-300
            ease-in-out
          "
        >
          Rentar
        </button>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style>
.x {
  width: 1.1rem;
  height: 0.5;
  background: red;
  border-radius: 100px;
  height: 1.1rem;
  transform: translateY(13px);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-51px);
}
</style>
