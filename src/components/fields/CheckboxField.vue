<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="emit('update:modelValue', $event.target.checked)"
  />
</template>

<script setup lang="ts">
defineProps({
  field: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
