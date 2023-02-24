<template>
  <div class="service-wrapper">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.service-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
  border-bottom: 1px solid #d9d9d9;
}
</style>
