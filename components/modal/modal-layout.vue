<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 items-center justify-center bg-gray-600/30"
    @click="closeModal"
  >
    <div class="rounded-3xl bg-white p-10" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
});

const closeModal = () => {
  props.onClose();
};
</script>
