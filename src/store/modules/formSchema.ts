import type { FormField } from '@/types/form'

export interface FormState {
  schema: FormField[]
  loading: boolean
  error: string | null
}

export const formSchema = {
  namespaced: true,

  state: (): FormState => ({
    schema: [],
    loading: false,
    error: null,
  }),

  mutations: {
    setSchema(state, schema: FormField[]) {
      state.schema = schema
    },
    setLoading(state, value: boolean) {
      state.loading = value
    },
    setError(state, error: string | null) {
      state.error = error
    },
  },

  actions: {
    async fetchSchema({ commit }, schemaName: string) {
      commit('setLoading', true)
      commit('setError', null)

      try {
        const response = await fetch(`/schemas/${schemaName}.json`)

        if (!response.ok) {
          throw new Error('Ошибка при загрузке схемы формы')
        }

        const data = await response.json()
        commit('setSchema', data)
      } catch (e: any) {
        commit('setError', e.message)
      } finally {
        const delay = 500 + Math.random() * 2000

        setTimeout(async () => {
          commit('setLoading', false)
        }, delay)
      }
    },
  },
}
