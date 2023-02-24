<template>
  <div class="section-title">
    <h2>{{ title }}</h2>

    <slot name="additional-content"></slot>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.section-title {
  border-right: 1px solid #d9d9d9;
  padding: 4.8rem 3.2rem 4.8rem 3.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;

  h2 {
    font-size: 2rem;
    line-height: 32px;
    font-weight: bold;
    color: #111;
  }
}
</style>
