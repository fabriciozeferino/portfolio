<template>
  <nav class="bg-white dark:bg-black-dark shadow">
    <div class="md:container mx-auto px-6 py-2 h-14">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">
          <TheMenuTitle />

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-500
                dark:text-gray-300
                hover:text-gray-600
                focus:outline-none focus:text-gray-600
                border-l
                dark:border-gray-700
                px-4
                py-2
                -my-2
                -mr-6
                cursor-pointer
              "
              aria-label="toggle menu"
              @click="drawer"
            >
              <BurgerIcon class="w-10 h-10 dark:text-gray-400 fill-current" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="hidden md:flex items-center justify-end flex-1">
          <div class="flex flex-row items-center mx-8 -mx-4" />

          <!-- right side -->
          <div class="flex items-center mt-4">
            <BaseLink
              v-for="item in menuItems"
              :key="item.path"
              :route-to="item.path"
              :label="item.label"
            />
          </div>

          <ToggleDarkMode class="-mr-6" />
        </div>
      </div>
    </div>

    <!-- background shadow -->
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
        @keydown.esc="isOpen = false"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="isOpen = false"
        />
      </div>
    </transition>

    <aside
      class="
        transform
        top-0
        left-0
        w-full
        xs:w-256
        bg-white
        dark:bg-black-medium
        fixed
        h-full
        overflow-auto
        ease-in-out
        transition-all
        duration-300
        z-30
      "
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex justify-between items-center shadow px-6 py-2 h-14 mb-8">
        <TheMenuTitle />

        <button
          type="button"
          class="
            text-gray-500
            dark:text-gray-300
            hover:text-gray-600
            focus:outline-none focus:text-gray-600
            border-l
            dark:border-gray-700
            px-4
            py-3
            -my-3
            -mr-6
            cursor-pointer
          "
          aria-label="toggle menu"
          @click="drawer"
        >
          <CloseIcon class="w-6 h-6" />
        </button>
      </div>

      <div class="flex flex-col mb-16">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          tag="div"
          class="
            flex
            justify-between
            items-center
            border-b
            dark:border-gray-700
            shadow-inner
            first:border-t
            py-4
            px-4
            cursor-pointer
            font-semibold
            text-base
          "
          :to="item.path"
          @click="drawer"
        >
          <span class="text-default-header">{{ item.label }}</span>

          <ChevronRightIcon class="h-4 w-4" />
        </router-link>
      </div>

      <div class="w-56 mx-auto">
        <ToggleDarkMode
          class="
            shadow-md
            rounded-lg
            bg-white
            dark:bg-black-light
            inline-block
            flex
            justify-center
            items-center
          "
          @click="drawer"
        >
          <span class="dark:text-gray-200 ml-1 mt-1"
            >Toggle {{ theme }} theme.</span
          >
        </ToggleDarkMode>
      </div>
    </aside>
  </nav>
</template>

<script>
import BurgerIcon from '@/assets/icons/burger.svg'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg'
import CloseIcon from '@/assets/icons/close.svg'
import BaseLink from '@/components/BaseLink.vue'
import TheMenuTitle from '@/components/TheMenuTitle.vue'
import ToggleDarkMode from '@/components/ToggleDarkMode'

export default {
  name: 'Navbar',

  components: {
    BurgerIcon,
    ChevronRightIcon,
    CloseIcon,
    BaseLink,
    TheMenuTitle,
    ToggleDarkMode,
  },

  data() {
    return {
      isOpen: false,

      menuItems: [
        { label: 'Home', path: '/home' },
        { label: 'Resume', path: '/resume' },
        { label: 'About', path: '/about' },
      ],
    }
  },

  computed: {
    theme() {
      return localStorage.theme === 'Dark' ? 'Light' : 'Dark'
    },
  },

  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        isOpen
          ? document.body.style.setProperty('overflow', 'hidden')
          : document.body.style.removeProperty('overflow')
      },
    },
  },

  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false
    })
  },

  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
