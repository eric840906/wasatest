<template>
  <div class="card">
    <h5><slot name="name"></slot></h5>
    <p><slot name="height"></slot></p>
    <p><slot name="weight"></slot></p>
    <p><slot name="gender"></slot></p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
  border: dashed;
  padding: 1rem;
}
</style>
