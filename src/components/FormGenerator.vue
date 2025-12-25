<template>
  <form class="form" @submit.prevent="onSave">
    <div v-for="field in schema" :key="field.name" class="form-field">
      <label v-if="field.label" class="form-label">
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

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  &-field {
    display: flex;
    align-items: center;
  }
  &-label {
    flex: 0 0 150px;
    font-weight: bold;
    align-self: center;
  }
  &-actions {
    width: 150%;
    margin-top: 32px;
    border-top: 1px solid #ddd;
    padding: 8px;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    & button {
      border-bottom: 1px solid #ddd;
      padding-bottom: 6px;
      &:hover {
        cursor: pointer;
        border-bottom: 2px solid #cccaca;
      }
      &:active {
        border-bottom: 2px solid #aaa;
        color: rgb(70, 70, 70);
      }
    }
  }
}
</style>
