<template>
  <span
    v-if="label === 'Vue.js'"
    class="
      block-inline
      text-sm
      border
      dark:border-gray-700
      rounded-full
      px-2
      py-1
      font-medium
    "
    style="color: #4fc08d; border-color: #4fc08d"
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  name: 'BaseTag',
  props: {
    label: { type: String, required: true },
  },
}
</script>
