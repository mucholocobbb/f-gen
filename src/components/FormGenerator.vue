<template>
  <form class="form-generator" @submit.prevent="onSave">
    <div v-for="field in schema" :key="field.name" class="form-field">
      <label v-if="field.label">
        {{ field.label }}
      </label>

      <slot
        :name="`field-${field.name}`"
        :field="field"
        :value="modelValue[field.name]"
        :update="(val) => updateField(field.name, val)"
      >
        <component
          :is="resolveComponent(field)"
          :field="field"
          :model-value="modelValue[field.name]"
          @update:model-value="(val) => updateField(field.name, val)"
        />
      </slot>
    </div>

    <div class="form-actions">
      <button type="submit">Сохранить</button>
      <button type="button" @click="onCancel">Отмена</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { resolveComponent } from '@/utils/resolveComponent'

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue', 'save', 'cancel'])

function updateField(name: string, value: any) {
  props.modelValue[name] = value
  emit('update:modelValue', props.modelValue)
}

function onSave() {
  emit('save', props.modelValue)
}

function onCancel() {
  emit('cancel')
}
</script>

<style scoped></style>
