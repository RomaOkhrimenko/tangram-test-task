<template>
  <div class="switch-checkbox">
    <input
      type="checkbox"
      class="switch-checkbox__input"
      :checked="isChecked"
      @click="handleShowCheckboxStatus"
    />
    <div class="switch-checkbox__minus" />
    <div class="switch-checkbox__cycle" />
  </div>
</template>

<script>
export default {
  props: ['isChecked'],
  methods: {
    handleShowCheckboxStatus() {
      this.$emit('handleShowCheckboxStatus', !this.isChecked)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-checkbox {
  position: relative;
  &__input {
    font-size: 20px;
    appearance: none;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    border-radius: 16px;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:checked {
      background: #007aff;
    }

    &:after {
      position: absolute;
      content: '';
      height: 28px;
      width: 28px;
      top: calc(50% - 1.4rem);
      border-radius: 50%;
      background: #fff;
      left: 0;
      transition: all 0.2s ease-in-out;
      z-index: 3;
    }

    &:checked:after {
      left: calc(100% - 1.5em);
    }
  }

  &__container {
  }

  &__minus {
    width: 8px;
    height: 1px;
    background-color: #d9d9d9;
    opacity: 0.24;
    position: absolute;
    left: 1.2rem;
    bottom: 50%;
    pointer-events: none;
  }
  &__cycle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #d9d9d9;
    position: absolute;
    right: 1.2rem;
    bottom: calc(50% - 6px);
    pointer-events: none;
  }
}
</style>
