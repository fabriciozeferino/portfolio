<template>
  <div class="md:container mx-auto px-2 md:px-32 py-4">
    <div class="mb-32 my-8">
      <h1 class="text-center mb-8">
        Hello! My name is <span class="font-extrabold">Fabricio Zeferino.</span>
        <br />
        I'm a Full Stack Web Developer.
      </h1>

      <p>
        <!--        I’m passionate about solving problems to make humans satisfied when they’re using digital products and services. I'm building & designing digital products since 11 years, with the combination of business development, UX/UI design, front-end development and online marketing.-->
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
        aliquet libero. Nulla mollis nec arcu vitae finibus. Donec condimentum
        nunc at elementum interdum. Etiam nec viverra nunc, eget euismod odio.
        Praesent sagittis dolor lorem, sit amet varius turpis lacinia lobortis.
      </p>
    </div>

    <p class="my-8">
      Having fun with <span style="color: #4fc08d">Vue.js</span>
    </p>

    <div class="flex flex-col">
      <div class="mb-16 bg-white dark:bg-black-light shadow-md rounded-lg overflow-hidden">
        <img
          class="h-44 w-full object-cover object-center"
          :src="require('@/assets/images/bg-01-l.jpg')"
          alt="Github Octocat"
        />

        <div class="p-6">
          <BaseTag label="Vue.js" />
          <h3
            class="
              block
              text-black-medium
              dark:text-gray-300
              font-semibold
              text-2xl
              mt-2
              hover:text-gray-600 hover:underline
            "
          >
            Get your GitHub Profile image.
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-50 mt-4 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </p>

          <div class="mt-4 flex justify-between items-center">
            <BaseAvatar />

            <router-link to="/github-avatar" class="btn-primary">
              Go to...
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseAvatar from '@/components/BaseAvatar'
import BaseTag from '@/components/BaseTag'

export default {
  name: 'HomePage',
  components: { BaseAvatar, BaseTag },
}
</script>

<style scoped>
.bg-image-1 {
  background-image: url('~@/assets/images/bg-01-s.jpg');
}
</style>
