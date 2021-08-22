<template>
  <svg
    class="fill-current inline-block align-baseline align-with-text m-1"
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    :width="width"
    :viewBox="viewBox"
  >
    <path
      v-if="name === 'profile'"
      d="M12 5.9a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
    />

    <g fill-rule="evenodd" v-if="name === 'skills'">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      />
      <path
        d="M13.49 11.38c.43-1.22.17-2.64-.81-3.62a3.468 3.468 0 00-4.1-.59l2.35 2.35-1.41 1.41-2.35-2.35c-.71 1.32-.52 2.99.59 4.1.98.98 2.4 1.24 3.62.81l3.41 3.41c.2.2.51.2.71 0l1.4-1.4c.2-.2.2-.51 0-.71l-3.41-3.41z"
      />
    </g>

    <path
      v-if="name === 'education'"
      d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
    />
  </svg>
</template>

<script>
export default {
  name: "Icon",

  props: {
    height: { type: Number, default: 24 },
    width: { type: Number, default: 24 },
    name: { type: String, required: true },
  },

  computed: {
    viewBox() {
      switch (this.name) {
        case "profile":
          return "4 4 16 16";
        case "skills":
          return "2 2 20 20";
        case "education":
          return "1 3 22 18";

        default:
          throw "Icon: prop name required!";
      }
    },
  },
};
</script>

<style>
</style>