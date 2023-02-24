<template>
  <div class="text-editor" v-if="editor">
    <div
      class="text-editor__btn"
      :class="{ active: isActive }"
      @click="isActive = !isActive"
    >
      <PlusSvg />
    </div>
    <div class="text-editor__states" :class="{ active: isActive }">
      <button
        @click="editText('bold')"
        :class="{ active: editor.isActive('bold') }"
      >
        <BoldFormatSvg />
      </button>
      <button
        @click="editText('italic')"
        :class="{ active: editor.isActive('italic') }"
      >
        <ItalicFormatSvg />
      </button>
      <button
        @click="editText('uppercase')"
        :class="{ active: editor.isActive({ textTransform: 'uppercase' }) }"
      >
        <FormatUppercaseSvg />
      </button>
      <button
        @click="editText('normal-format')"
        :class="{ active: editor.isActive({ textTransform: 'normal' }) }"
      >
        <FormatNormalSvg />
      </button>
      <button
        @click="editText('lowercase')"
        :class="{ active: editor.isActive({ textTransform: 'lowercase' }) }"
      >
        <FormatLowercaseSvg />
      </button>
      <button
        @click="editText('strike-trough')"
        :class="{ active: editor.isActive('strike') }"
      >
        <StrikeTroughFormat />
      </button>
      <button
        @click="editText('underline')"
        :class="{ active: editor.isActive('underline') }"
      >
        <UnderlinedFormatSvg />
      </button>
      <button
        @click="editText('baseline-center')"
        :class="{ active: editor.isActive({ textAlign: 'center' }) }"
      >
        <BaselineFormatCenter />
      </button>
      <button
        @click="editText('baseline-justify')"
        :class="{ active: editor.isActive({ textAlign: 'justify' }) }"
      >
        <BaseLineFormatJustify />
      </button>
      <button
        @click="editText('baseline-left')"
        :class="{ active: editor.isActive({ textAlign: 'left' }) }"
      >
        <BaselineFormatLeft />
      </button>
      <button
        @click="editText('baseline-right')"
        :class="{ active: editor.isActive({ textAlign: 'right' }) }"
      >
        <BaselineFormatRight />
      </button>
      <button
        @click="editText('quote')"
        :class="{ active: editor.isActive('blockquote') }"
      >
        <QuoteSvg />
      </button>
      <button
        @click="editText('bullet-list')"
        :class="{ active: editor.isActive('bulletList') }"
      >
        <BulletListSvg />
      </button>
      <button
        @click="editText('number-list')"
        :class="{ active: editor.isActive('orderedList') }"
      >
        <NumberListSvg />
      </button>
      <button @click="editText('set-document')"><AttachFileSvg /></button>
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
  BaseLineFormatJustify,
  FormatLowercaseSvg,
  FormatNormalSvg,
  FormatUppercaseSvg,
  AttachFileSvg
} from 'assets/images/svg'
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
    BaseLineFormatJustify,
    FormatLowercaseSvg,
    FormatNormalSvg,
    FormatUppercaseSvg,
    AttachFileSvg
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
  @media (max-width: 994px) {
    width: 100%;
  }
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
    flex-shrink: 0;
    @media (max-width: 554px) {
      transform: scale(0.8);
    }

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
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;
    overflow-x: hidden;

    &.active {
      @media (max-width: 994px) {
        overflow-x: auto;
        &::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      }
      button {
        margin-left: 1.6rem;
        opacity: 1;
        pointer-events: auto;

        @media (max-width: 994px) {
          margin-left: 1rem;
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
    button {
      border: 0;
      margin-left: 0;
      opacity: 0;
      transition: margin-left 0.3s, opacity 0.3s, color 0.3s;
      pointer-events: none;

      &.active {
        color: #007aff;
      }
    }
  }
}
</style>
