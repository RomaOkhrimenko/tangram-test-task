<template>
  <div ref="inputSelect" class="input-select">
    <div class="input-select__field" @click="handleOpenOptions">
      <span>{{ title.text }}</span>
      <ArrowDown />
    </div>

    <ul class="input-select__options" :class="{ active: isOpen }">
      <li
        v-for="option in options"
        v-if="option.id !== title.id"
        @click="handleOption(option)"
        :key="option.id"
      >
        {{ option.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ArrowDown } from '@/assets/images/svg'
export default {
  components: { ArrowDown },

  data() {
    return {
      isOpen: false,
      title: { text: 'Title', id: 0 },
      options: [
        { text: 'Text1', id: 1 },
        { text: 'Text2', id: 2 },
        { text: 'Text3', id: 3 },
        { text: 'Text4', id: 4 },
        { text: 'Text5', id: 5 },
        { text: 'Text6', id: 6 },
        { text: 'Text7', id: 7 },
        { text: 'Text8', id: 8 },
        { text: 'Text9', id: 9 }
      ]
    }
  },

  methods: {
    checkClick(e) {
      if (!e.target.closest('.input-select')) {
        this.isOpen = false
        window.removeEventListener('click', this.checkClick)
      }
    },
    handleOpenOptions() {
      if (!this.isOpen) {
        window.addEventListener('click', this.checkClick)
      } else {
        window.removeEventListener('click', this.checkClick)
      }
      this.isOpen = !this.isOpen
    },

    handleOption(option) {
      this.isOpen = false
      this.title = option
    }
  }
}
</script>

<style lang="scss" scoped>
.input-select {
  border: 1px solid #dededf;
  border-radius: 4px;
  position: relative;
  &__field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 1.2rem;

    span {
      font-size: 1.3rem;
      line-height: 24px;
    }
  }

  &__options {
    position: absolute;
    top: 100%;
    list-style: none;
    width: 100%;
    background-color: #fff;
    max-height: 200px;
    overflow-y: auto;
    border-bottom: 1px solid #dededf;
    font-size: 1.3rem;
    line-height: 24px;

    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    &.active {
      opacity: 1;
      pointer-events: auto;
    }
    li {
      border-bottom: 1px solid #dededf;
      border-right: 1px solid #dededf;
      border-left: 1px solid #dededf;
      padding: 1.2rem;
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
