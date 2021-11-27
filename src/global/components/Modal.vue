<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
            class="bg-purple-50 opacity-90"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-block
                w-full
                max-w-md
                p-6
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-white
                shadow-xl
                rounded-2xl
              "
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Desactivar Cuenta
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Estas apunto de desactivar tu cuenta.
                </p>
              </div>

              <div class="mt-4 flex justify-end">
                <button
                  type="button"
                  class="btn hover:btn-black mr-3"
                  @click="closeModal"
                >
                  Cancelar
                </button>
                <button
                  @click="cancelAccount"
                  type="button"
                  class="btn btn-red"
                >
                  Desactivar
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { inject } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { useStore } from "vuex";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },

  setup() {
    const isOpen = inject("isOpen");

    const { dispatch } = useStore();

    const closeModal = () => (isOpen.value = false);
    const openModal = () => (isOpen.value = true);

    const cancelAccount = async () => {
      await dispatch("profileModule/cancelAccount");
      closeModal();
    };

    return {
      isOpen,
      cancelAccount,
      closeModal,
      openModal,
    };
  },
};
</script>
