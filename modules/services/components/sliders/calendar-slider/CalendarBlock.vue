<template>
  <div
    @click="handleCurrentSlide"
    class="calendar-block"
    :class="{ active: isActive }"
  >
    <span>{{ data.month }}</span>
    <h2>{{ data.dayOfTheMonth }}</h2>
    <h4>{{ data.nameOfTheDay }}</h4>
  </div>
</template>

<script>
export default {
  props: ['isActive', 'data'],

  methods: {
    handleCurrentSlide() {
      this.$emit('handleCurrentSlide', this.data.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar-block {
  border-radius: 4px;
  width: 88px;
  height: 88px;
  border: 2px solid #111;
  background-color: #11111100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0;
  transition: background-color 0.3s, color 0.3s, width 0.3s, height 0.3s;
  color: #111;
  cursor: pointer;

  &.active {
    width: 104px;
    height: 104px;
    //transform: scale(1.2);
    background-color: #111111;
    color: #fff;

    h2 {
      color: #fdfdfd;
    }
  }

  span {
    font-size: 1.3rem;
    opacity: 0.56;
  }

  h2 {
    font-size: 3.3rem;
    line-height: 38px;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 500;
  }
}
</style>
