<template>
  <div class="rounded-full bg-gray-700 px-2 py-1 text-xs text-white">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
}>();
</script>
