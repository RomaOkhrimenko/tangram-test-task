<template>
  <div class="chat-settings-client">
    <div class="chat-settings-client__info">
      <div v-if="isAppointAdmin">
        <label class="chat-settings-client__checkbox">
          <input type="checkbox" />
          <span class="checkmark">
            <CheckSvg />
          </span>
        </label>
      </div>
      <ChatAvatar status="online" />
      <span>{{ name }}</span>
    </div>
    <div v-if="root && !isAppointAdmin" class="chat-settings-client__root">
      <span>{{ root }}</span>
    </div>
  </div>
</template>

<script>
import ChatAvatar from '~/components/templates/blocks/ChatAvatar.vue'
import { CheckSvg } from '~/assets/images/svg'

export default {
  components: { ChatAvatar, CheckSvg },
  props: {
    img: {
      type: 'String'
    },
    name: {
      type: String,
      required: true
    },
    root: {
      type: String
    },
    isAppointAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-settings-client {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  &__checkbox {
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

    input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
      outline: none;
      appearance: none;
      &:checked ~ .checkmark {
        border: 2px solid #111;
        background: #111111;

        svg {
          color: #fff;
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

      svg {
        opacity: 0;
        color: #fff;
        transition: opacity 0.3s;
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__info {
    display: flex;
    align-items: center;

    .chat-avatar {
      transform: scale(0.86);
      margin-right: 1rem;
    }

    span {
      font-size: 1.7rem;
      line-height: 20px;
      color: #111;
      font-weight: 500;
    }
  }

  &__root {
    background-color: rgba(111, 111, 111, 0.08);
    padding: 0.1rem 1rem;
    border-radius: 10px;
    font-size: 1.1rem;
    margin-left: 1rem;
  }
}
</style>
