<template>
  <div class="message" :class="`${myMessage ? 'my-message' : ''}`">
    <img src="~/assets/images/png/avatar.png" alt="image" />
    <div class="message__container">
      <div class="message__content" v-for="item in message">
        <span :key="item.message_image" v-if="item.message">{{
          item.message
        }}</span>
        <img
          height="360px"
          :key="item.message_image"
          v-if="item.message_image"
          :src="item.message_image"
          alt=""
        />
      </div>
      <div class="message__time">
        {{ time }}
      </div>
    </div>
    <SettingFill />
  </div>
</template>

<script>
import { SettingFill } from '~/assets/images/svg'
export default {
  props: {
    message: {
      type: Array,
      required: true
    },
    myMessage: {
      type: Boolean,
      required: false
    },
    time: {
      type: String,
      required: true
    }
  },
  components: {
    SettingFill
  }
}
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  max-width: 640px;
  align-items: flex-end;
  position: relative;
  margin-bottom: 2rem;

  @media (max-width: 1440px) {
    max-width: 600px;
  }

  &.my-message {
    flex-direction: row-reverse;
    margin-left: auto;

    & > img {
      margin-right: 0;
      margin-left: 1.6rem;
    }

    .message__content {
      border-radius: 16px 16px 0 16px;
      margin-left: auto;

      img {
        border-radius: 16px 16px 0 16px;
      }
    }

    .message__time {
      margin-left: auto;
    }

    & > svg {
      left: -4rem;
      right: auto;
    }
  }
  & > img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    margin-right: 1.6rem;
  }
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__content {
    max-width: 592px;
    background-color: #f5f5f5;
    border-radius: 16px 16px 16px 0;
    margin-bottom: 0.8rem;

    span {
      display: flex;
      font-size: 1.7rem;
      padding: 2.4rem;
      line-height: 2.8rem;

      @media (max-width: 1440px) {
        font-size: 1.5rem;
        line-height: 24px;
        padding: 1.6rem;
      }

      @media (max-width: 554px) {
        padding: 1.2rem;
        font-size: 1.3rem;
        line-height: 2rem;
      }
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 16px 16px 16px 0;
      object-fit: cover;
      max-height: 264px;
    }
  }

  &__time {
    margin-top: 2rem;

    @media (max-width: 554px) {
      margin-top: 0;
    }
  }

  & > svg {
    position: absolute;
    top: 0;
    right: -4rem;
    cursor: pointer;

    @media (max-width: 554px) {
      display: none;
    }
  }
}
</style>
