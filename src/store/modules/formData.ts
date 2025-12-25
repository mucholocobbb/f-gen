export interface FormState {
  data: Record<string, any>
}

export const formData = {
  namespaced: true,

  state: (): FormState => ({
    data: {},
  }),

  mutations: {
    setFormData(state, payload: Record<string, any>) {
      state.data = payload
    },

    updateField(state, { name, value }: { name: string; value: any }) {
      state.data[name] = value
    },

    resetForm(state) {
      state.data = {}
    },
  },
}
