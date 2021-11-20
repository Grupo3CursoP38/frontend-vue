<template>
  <main class="container mx-auto">
    <h1 class="text-center font-bold text-2xl my-5">Products List</h1>
    <section class="grid">
      <article class="bg-purple-50 rounded-md shadow-md">
        <img src="@/static/404.svg" class="w-full" alt="" />
        <div class="px-5">
          <h3 class="font-semibold text-lg my-3">Short product description</h3>
          <span class="text-gray-600">Short product description</span>
          <div class="my-2 flex justify-between">
            <span>COP 40.000</span>
            <button
              class="
                hover:text-purple-500
                underline
                font-semibold
                text-gray-800
              "
            >
              Alquilar
            </button>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>
