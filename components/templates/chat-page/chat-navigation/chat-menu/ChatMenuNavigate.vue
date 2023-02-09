<template>
  <div
    @click="onClick"
    class="chat-menu-navigate"
    :class="`${isActive ? 'active' : ''} ${isAnimate ? 'animate' : ''}`"
  >
    <div class="chat-menu-navigate__ico">
      <slot></slot>
    </div>
    <span>{{ title }}</span>
  </div>
</template>

<script>
import SvgLogo from '~/assets/images/svg/user-octagon.svg?inline'
export default {
  props: {
    // svg: {
    //   type: HTMLElement,
    //   required: true
    // }
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    isAnimate: {
      type: Boolean,
      required: false
    }
  },
  components: { SvgLogo },
  methods: {
    onClick() {
      this.$emit('changeTab', this.link)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-menu-navigate {
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-top: 2px solid rgba(111, 111, 111, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(111, 111, 111, 0.1);
    .chat-menu-navigate__ico {
      background-color: #111111;
      svg {
        color: #fff;
      }

      &-opacity {
        opacity: 0.4;
      }
    }
  }

  &.animate {
    &:hover {
      svg {
        transform: rotate(90deg);
      }
    }

    &.active {
      svg {
        transform: rotate(90deg);
      }
    }
  }

  &.active {
    background-color: rgba(111, 111, 111, 0.1);
    .chat-menu-navigate__ico {
      background-color: #007aff;

      svg {
        color: #fff;
      }

      &-opacity {
        opacity: 0.4;
      }
    }
  }

  &:last-child {
    border-bottom: 2px solid rgba(111, 111, 111, 0.1);
  }

  &__ico {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(111, 111, 111, 0.1);
    width: 48px;
    height: 48px;
    border-radius: 8px;
    margin-right: 1.6rem;
    transition: background-color 0.3s;

    svg {
      width: 24px;
      height: 24px;
      transition: color 0.3s, transform 0.3s;
    }

    &-opacity {
      transition: opacity 0.3s;
    }
  }

  span {
    font-size: 1.7rem;
    line-height: 20px;
    font-weight: 600;
  }
}
</style>
