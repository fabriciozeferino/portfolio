<template>
  <div class="flex items-center">
    <img
      class="mr-1 w-10 h-10 object-cover rounded-full hidden sm:block"
      :src="require('@/assets/images/avatar.jpeg')"
      alt="avatar"
    />
    <span class="mx-2 font-semibold text-white dark:text-gray-200"
      >Fabricio Zeferino</span
    >
  </div>
</template>

<script>
export default {
  name: 'BaseAvatar'
}
</script>
