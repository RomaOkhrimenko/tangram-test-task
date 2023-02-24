<template>
  <div class="task-card">
    <slot name="svg"></slot>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.task-card {
  height: 88px;
  width: 100%;
  border: 2px solid #111111;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: border 0.3s;

  &:hover {
    border: 2px solid rgba(#111, 0.4);
  }

  svg {
    margin-bottom: 1rem;
    transform: scale(1.4);
  }

  span {
    font-size: 1.3rem;
    line-height: 24px;
    font-weight: 500;
  }
}
</style>
