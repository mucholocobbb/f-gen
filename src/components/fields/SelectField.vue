<template>
  <select
    :value="modelValue"
    @change="emit('update:modelValue', $event.target.value)"
    class="select-field"
  >
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

<style scoped>
.select-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>
