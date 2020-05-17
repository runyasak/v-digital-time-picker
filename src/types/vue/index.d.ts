import 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    internalValue: string;
  }
}
