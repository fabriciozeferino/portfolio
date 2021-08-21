<template>
  <div class="flex flex-col h-screen justify-between overflow-x-hidden">
    <TheNavbar />

    <router-view v-slot="{ Component }" class="container mx-auto px-10">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <TheFooter />

    <!-- <loading  f :show="loading" /> -->
  </div>
</template>

<script>
// import * as fb from '../firebase'
import TheFooter from '@/components/TheFooter.vue'
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'App',

  components: { TheFooter, TheNavbar }
}
</script>

<style scoped>
.container {
  width: 100%;
}

@media (min-width: 375px) {
  .container {
    max-width: 100%;
  }
}
</style>
