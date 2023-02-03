<template>
  <div @click="onClick" class="chat-menu-navigate" :class="isActive ? 'active': ''">
    <div class="chat-menu-navigate__ico">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g id="messages-2" transform="translate(-428 -250)">
          <path class="chat-menu-navigate__ico-opacity" id="Vector" d="M14.13,14.83l.39,3.16a1,1,0,0,1-1.5.98L8.83,16.48a9.982,9.982,0,0,1-1.35-.09,4.861,4.861,0,0,0,1.18-3.16,5.327,5.327,0,0,0-5.5-5.14A5.683,5.683,0,0,0,.04,9,6.339,6.339,0,0,1,0,8.24C0,3.69,3.95,0,8.83,0s8.83,3.69,8.83,8.24A8.054,8.054,0,0,1,14.13,14.83Z" transform="translate(432.34 252)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <path id="Vector-2" data-name="Vector" d="M11,5.14A4.861,4.861,0,0,1,9.82,8.3,5.584,5.584,0,0,1,5.5,10.27L2.89,11.82a.625.625,0,0,1-.94-.61L2.2,9.24A4.988,4.988,0,0,1,0,5.14,5.023,5.023,0,0,1,2.38.91,5.683,5.683,0,0,1,5.5,0,5.327,5.327,0,0,1,11,5.14Z" transform="translate(430 260.09)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </g>
      </svg>
    </div>
    <span>{{ title }}</span>
  </div>
</template>

<script>
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
    }
  },

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

  &.active {
    background-color: rgba(111, 111, 111, 0.1);
    .chat-menu-navigate__ico {
      background-color: #007AFF;

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
      transition: color 0.3s;
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
