<template>
  <label class="radio-input">
    <input type="radio" hidden :checked="checked" />
    <div class="checkmark">
      <div class="checkmark__cycle" />
    </div>
    <span>{{ text }}</span>
  </label>
</template>

<script>
export default {
  props: ['checked', 'text']
}
</script>

<style lang="scss" scoped>
.radio-input {
  display: flex;
  align-items: center;
  cursor: pointer;
  input {
    &:checked ~ .checkmark {
      .checkmark__cycle {
        transform: scale(1);
      }
    }
  }

  .checkmark {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    margin-right: 1.6rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &__cycle {
      width: 24px;
      height: 24px;
      background-color: #007aff;
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.3s;
    }
  }

  span {
    font-size: 1.7rem;
    line-height: 20px;
    font-weight: normal;
  }
}
</style>
