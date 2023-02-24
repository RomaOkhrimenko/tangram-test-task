<template>
  <button class="distance-button" :class="{ active: isActive }">
    <h3>+{{ distance }}<span>km</span></h3>
  </button>
</template>

<script>
export default {
  props: ['isActive', 'distance']
}
</script>

<style lang="scss" scoped>
.distance-button {
  border: 1px solid rgba(#111, 0.16);
  background: #11111100;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 48px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(#111, 0.5);
    color: #fdfdfd;
  }

  &.active {
    color: #fdfdfd;
    background-color: #111;
    border: 1px solid #111;

    span {
      opacity: 0.56;
    }
  }

  h3 {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;

    span {
      font-size: 1.3rem;
      line-height: 16px;
      font-weight: normal;
      margin-left: 0.8rem;
      transition: opacity 0.3s;
    }
  }
}
</style>
