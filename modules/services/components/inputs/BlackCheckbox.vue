<template>
  <label class="black-checkbox">
    <input type="checkbox" />
    <div class="checkmark"><CheckSvg /></div>
    <span>{{ text }}</span>
  </label>
</template>

<script>
import { CheckSvg } from '~/assets/images/svg'
export default {
  components: {
    CheckSvg
  },

  props: ['text']
}
</script>

<style lang="scss" scoped>
.black-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;

  .checkmark {
    padding: 7.5px 6px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    color: #fff;
    margin-right: 1.6rem;
    transition: background-color 0.3s;

    svg {
      transition: opacity 0.3s;
      opacity: 0;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    outline: none;
    appearance: none;
    &:checked ~ .checkmark {
      background-color: #111;

      svg {
        opacity: 1;
      }
    }
  }

  span {
    font-size: 1.7rem;
    line-height: 20px;
    font-weight: normal;
  }
}
</style>
