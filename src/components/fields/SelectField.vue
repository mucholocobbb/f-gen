<template>
  <select :value="modelValue" @change="emit('update:modelValue', $event.target.value)">
    <option v-for="option in field.options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
defineProps({
  field: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
