<template>
  <div class="text-editor">
    <div
      class="text-editor__btn"
      :class="{ active: isActive }"
      @click="isActive = !isActive"
    >
      <PlusSvg />
    </div>
    <div class="text-editor__states" :class="{ active: isActive }">
      <button @click="editText('bold')"><BoldFormatSvg /></button>
      <button @click="editText('italic')"><ItalicFormatSvg /></button>
      <button @click="editText('strike-trough')"><StrikeTroughFormat /></button>
      <button @click="editText('underline')"><UnderlinedFormatSvg /></button>
      <button @click="editText('baseline-center')">
        <BaselineFormatCenter />
      </button>
      <button @click="editText('baseline-justify')">
        <BaseLineFormatJustify />
      </button>
      <button @click="editText('baseline-left')"><BaselineFormatLeft /></button>
      <button @click="editText('baseline-right')">
        <BaselineFormatRight />
      </button>
      <button @click="editText('quote')"><QuoteSvg /></button>
      <button @click="editText('bullet-list')"><BulletListSvg /></button>
      <button @click="editText('number-list')">
        <NumberListSvg />
      </button>
      <button><ItalicFormatSvg /></button>
    </div>
  </div>
</template>

<script>
import {
  PlusSvg,
  BoldFormatSvg,
  ItalicFormatSvg,
  BaselineFormatCenter,
  BaselineFormatRight,
  BaselineFormatLeft,
  UnderlinedFormatSvg,
  StrikeTroughFormat,
  QuoteSvg,
  BulletListSvg,
  NumberListSvg,
  BaseLineFormatJustify
} from '~/assets/images/svg'
export default {
  components: {
    PlusSvg,
    BoldFormatSvg,
    ItalicFormatSvg,
    BaselineFormatCenter,
    BaselineFormatRight,
    BaselineFormatLeft,
    UnderlinedFormatSvg,
    StrikeTroughFormat,
    QuoteSvg,
    BulletListSvg,
    NumberListSvg,
    BaseLineFormatJustify
  },
  props: ['editor'],
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    editText(edit) {
      this.$emit('editText', edit)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-editor {
  display: flex;
  align-items: center;
  position: relative;
  &__btn {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 122, 255, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    color: #007aff;

    &.active {
      svg {
        transform: rotate(45deg);
      }
    }

    svg {
      transition: transform 0.3s;
    }
  }

  &__states {
    &.active {
      button {
        margin-left: 1.6rem;
        opacity: 1;
      }
    }
    button {
      border: 0;
      margin-left: 0;
      opacity: 0;
      transition: margin-left 0.3s, opacity 0.3s;
    }
  }
}
</style>
