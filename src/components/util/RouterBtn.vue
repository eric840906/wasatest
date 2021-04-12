<template>
  <router-link :to="link">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    link: {
      type: String,
      require: true
    }
  }
})
</script>

<style lang="scss" scoped>
a {
  color: $cyber-text;
  font-weight: bolder;
  position: relative;
  &::after {
    content: '';
    background: $cyber-text;
    position: absolute;
    bottom: -0.25rem;
    width: 0%;
    height: 2px;
    left: 0px;
    opacity: 0;
    transition: 0.5s all ease;
  }
  &:hover {
    &::after {
      opacity: 1;
      width: 100%;
    }
  }
}
.router-link-active {
  &::after {
    width: 100%;
    opacity: 1;
  }
}
</style>
