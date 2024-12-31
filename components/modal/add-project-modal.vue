<template>
  <ModalLayout :is-open="isOpen" @close="closeModal">
    <input
      v-model="newProject"
      type="text"
      class="mb-4 w-full border p-2"
      placeholder="Enter project name"
    />
    <button
      class="rounded bg-blue-500 px-4 py-2 text-white"
      @click="addProject"
    >
      Add Project
    </button>
  </ModalLayout>
</template>

<script lang="ts" setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'addProject', project: string): void;
  (e: 'onClose'): void;
}>();

const newProject = ref('');

const closeModal = () => {
  emit('onClose');
};

const addProject = () => {
  if (newProject.value.trim() !== '') {
    emit('addProject', newProject.value);
    newProject.value = '';
    closeModal();
  }
};
</script>
