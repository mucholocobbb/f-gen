import InputField from '@/components/fields/inputField.vue'
import SelectField from '@/components/fields/SelectField.vue'
import CheckboxField from '@/components/fields/CheckboxField.vue'
import TextareaField from '@/components/fields/TextareaField.vue'
import type { FormField } from '@/types/form'

export function resolveComponent(field: FormField) {
  switch (field.type) {
    case 'input':
      return InputField
    case 'select':
      return SelectField
    case 'checkbox':
      return CheckboxField
    case 'textarea':
      return TextareaField
  }
}
