<template>
  <nav class="navbar">
    <ul>
      <li><RouterBtn to='/'>Home</RouterBtn></li>
      <li><RouterBtn to='/about'>About</RouterBtn></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RouterBtn from '@/components/util/RouterBtn.vue'
export default defineComponent({
  components: {
    RouterBtn
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $cyber-background;
  box-shadow: 0px 0px 0.5rem;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    padding: 1rem;
  }
}
</style>
