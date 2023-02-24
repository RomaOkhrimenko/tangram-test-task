<template>
  <input class="input-text" type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  props: ['placeholder']
}
</script>

<style lang="scss" scoped>
.input-text {
  font-size: 1.3rem;
  line-height: 24px;
  padding: 1.6rem;
  width: 100%;
  outline: none;
  border-radius: 4px;
  border: 1px solid #dededf;
  font-weight: 600;
  width: 100%;
  max-height: 96px;
  &::placeholder {
    opacity: 0.56;
  }
}
</style>
