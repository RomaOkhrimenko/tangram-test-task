<template>
  <textarea class="textarea-input" :placeholder="placeholder" />
</template>

<script>
export default {
  props: ['placeholder']
}
</script>

<style lang="scss" scoped>
.textarea-input {
  padding: 1.6rem;
  border: 1px solid #dededf;
  border-radius: 4px;
  font-size: 1.3rem;
  line-height: 24px;
  outline: none;
  max-height: 150px;
  min-height: 96px;
  resize: vertical;

  &::placeholder {
    opacity: 0.56;
  }

  &::-webkit-scrollbar {
    width: 1.1rem;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #777777;
  }

  ::-webkit-scrollbar-button:single-button {
    background-color: #f5f5f5;
    display: block;
    border-style: solid;
    height: 16px;
    width: 16px;
    cursor: pointer;
  }
  /* Up */
  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    width: 100%;
    background-position: center;
    background-image: url('~/assets/images/svg/arrow-up-scroll.svg');
    cursor: pointer;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
    border-color: transparent transparent #777777 transparent;
  }

  /* Down */
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    width: 100%;
    background-position: center;
    background-image: url('~/assets/images/svg/arrow-bottom-scroll.svg');
  }

  &::-webkit-scrollbar-button:vertical:single-button:increment:hover {
    border-color: #777777 transparent transparent transparent;
  }

  /* Resize */
  &::-webkit-resizer {
    background-image: url('~/assets/images/svg/resizer-btn.svg');
    background-position: center;
    background-size: contain;
    width: 16px;
    height: 16px;
    background-color: #dcdcdc;
  }
}
</style>
