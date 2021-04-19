<template>
  <Navbar/>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'
export default defineComponent({
  components: {
    Navbar
  },
  setup () {
    axios({
      url: '/v1/77d30383-d0b9-44a4-a923-42163c93521f',
      method: 'GET'
    }).then(res => console.log(res))
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background: $cyber-background;
}
</style>
