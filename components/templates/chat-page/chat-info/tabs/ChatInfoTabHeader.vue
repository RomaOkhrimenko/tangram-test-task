<template>
  <div class="tab-header" @click="handleTab">
    <LeftArrowSvg />
  </div>
</template>

<script>
import { LeftArrowSvg } from '~/assets/images/svg'
export default {
  components: { LeftArrowSvg },
  methods: {
    handleTab() {
      this.$emit('handleTab', 'main')
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-header {
  padding-bottom: 1.6rem;
  margin-left: 1rem;
  border-bottom: 1px solid #d9d9d9;
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #007aff;
    }
  }
}
</style>
