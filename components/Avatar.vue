<template>
  <img
    class="
      mr-1
      w-28
      h-28
      object-cover
      rounded-full
      shadow-md
      inline-block
      border-4
    "
    :src="require('../static/images/avatar.jpeg')"
    alt="avatar"
  />
</template>

<script>
export default {
  name: "BaseAvatar",
};
</script>
