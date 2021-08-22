<template>
  <div class="flex items-baseline text-base border-b-2 mb-2">
    <Icon :name="icon" :height="16" :width="16" class="mr-1" />

    <h2 class="inline-block uppercase">
      {{ text }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Topic",

  props: {
    text: { type: String, required: true },
    icon: { type: String, required: true },
  },
};
</script>

<style scoped>
h2 {
  font-size: 1.2rem;
  /* margin-top: 2px; */
  letter-spacing: 1px;
  line-height: 1.2rem;
}
</style>