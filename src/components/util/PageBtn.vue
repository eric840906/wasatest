<template>
  <button class='page-btn'>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 5px 10px;
  max-width: 80px;
  transition: all 0.5s ease;
  &:hover{
    box-shadow: inset 0px 3px 5px, inset 6px 0px 6px, inset -6px 0px 6px, inset 0px -3px 5px;
  }
}
</style>
