<template>
  <div>
    <div class="container" :v-if="isActive ? (color = 'red') : (color = 'green')"></div>
    <button @click="changeColor">Change Color</button>
  </div>
</template>

<script>
export default {
  name: 'Toggleclass',
  data() {
    return {
      isActive: true,
    }
  },
  methods: {
    changeColor() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style>
.container {
    height: 200px;
    width:200px;
    background-color: {color};
}
</style>
