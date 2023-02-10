<template>
  <div class="modal" :class="{ active: isActive }" @click="hideModal">
    <div class="modal-wrapper" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    hideModal() {
      this.$emit('handleShowModal', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  &.active {
    opacity: 1;
    pointer-events: auto;

    .modal-wrapper {
      transform: scale(1);
    }
  }

  .modal-wrapper {
    display: flex;
    justify-content: center;
    transform: scale(0);
    transition: transform 0.3s;
  }
}
</style>
