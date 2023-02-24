<template>
  <div
    class="project-status-option"
    :class="{ active: status }"
    @click="handleChosenStatus()"
  >
    <label>
      <slot name="status"></slot>

      <span class="checkmark">
        <CheckSvg />
      </span>
    </label>
  </div>
</template>

<script>
import { UnlockSvg, CheckSvg } from 'assets/images/svg'
export default {
  components: {
    UnlockSvg,
    CheckSvg
  },

  props: ['status', 'title', 'name'],

  methods: {
    handleChosenStatus() {
      this.$emit('handleChosenStatus', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.project-status-option {
  padding: 0.8rem 1.6rem;
  transition: background-color 0.3s;

  &.active {
    background-color: #007aff;
    label {
      color: #fff;
    }

    .checkmark {
      border: 2px solid #fff;

      svg {
        opacity: 1;
      }
    }
  }
  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #007aff;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 1.6rem;
      transition: color 0.3s;
    }

    span {
      font-size: 1.3rem;
      line-height: 16px;
      font-weight: 600;
      transition: color 0.3s;
    }
  }

  .checkmark {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #007aff;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      transition: opacity 0.3s;
      opacity: 0;
    }
  }
}
</style>
