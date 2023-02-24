<template>
  <label @click="handleFilterOption">
    <input type="checkbox" :checked="isChecked" />

    <span class="checkmark">
      <CheckSvg />
    </span>
    {{ title }}
  </label>
</template>

<script>
import { CheckSvg } from 'assets/images/svg'
export default {
  components: { CheckSvg },
  props: {
    title: {
      type: String,
      required: true
    },
    isChecked: {
      type: Boolean,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleFilterOption() {
      this.$emit('handleFilterOption', { id: this.id, title: this.title })
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 100%;
  font-size: 1.7rem;
  font-weight: 500;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: background-color 0.3s;
  padding: 1.2rem 1.6rem;

  &:hover {
    background: #f5f5f5;
    .checkmark {
      border: 2px solid #111;
    }
  }

  @media (max-width: 1440px) {
    font-size: 1.5rem;
  }

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    outline: none;
    appearance: none;
    &:checked ~ .checkmark {
      border: 2px solid #007aff;

      svg {
        opacity: 1;
      }
    }
  }

  .checkmark {
    border: 2px solid rgba(111, 111, 111, 0.4);
    border-radius: 6px;
    margin-right: 0.8rem;
    transition: border 0.3s;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1440px) {
      width: 20px;
      height: 20px;
    }

    svg {
      opacity: 0;
      color: #007aff;
      transition: opacity 0.3s;
    }
  }
}
</style>
