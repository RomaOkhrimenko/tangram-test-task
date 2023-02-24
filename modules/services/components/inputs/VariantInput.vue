<template>
  <label
    @click="handleChecked"
    class="variant-input"
    :class="{ active: isChecked }"
  >
    <span class="variant-input__title">{{ title }}</span>

    <div class="checkmark" :class="{ active: isChecked }">
      <div class="checkmark-border">
        <CheckSvg />
      </div>
    </div>
  </label>
</template>

<script>
import { CheckSvg } from 'assets/images/svg'
export default {
  components: { CheckSvg },
  props: ['isChecked', 'id', 'title'],
  methods: {
    handleChecked() {
      this.$emit('handleChecked', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.variant-input {
  width: 100%;
  padding: 3.2rem;
  background: #eaeaea;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #111;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  &.active {
    background-color: #111;
    color: #fff;
  }

  &__title {
    font-size: 2.6rem;
    line-height: 32px;
    font-weight: 700;
  }

  .checkmark {
    width: 32px;
    height: 32px;
    background-color: #fff;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      .checkmark-border {
        border: 2px solid rgba(#111, 0.4);

        svg {
          transform: scale(1);
          color: #111;
        }
      }
    }

    &-border {
      border: 2px solid rgba(#111, 0);
      border-radius: 50%;
      width: 26px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: border 0.3s;
    }

    svg {
      transform: scale(0);
      transition: transform 0.3s;
    }
  }
}
</style>
