<template>
  <div class="w-[120px]">
    <el-select v-model="internalValue">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array as () => { value: string; label: string }[],
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const internalValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue;
  },
);

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
