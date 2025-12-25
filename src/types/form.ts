export type FormFieldType = 'input' | 'select' | 'checkbox' | 'textarea'

export interface BaseField {
  type: FormFieldType
  name: string
  label?: string
  required?: boolean
}

export interface InputField extends BaseField {
  type: 'input'
  attrs?: Record<string, any>
}

export interface SelectField extends BaseField {
  type: 'select'
  options: { label: string; value: any }[]
}

export interface CheckboxField extends BaseField {
  type: 'checkbox'
}

export interface TextareaField extends BaseField {
  type: 'textarea'
  attrs?: Record<string, any>
}

export type FormField = InputField | SelectField | CheckboxField | TextareaField
