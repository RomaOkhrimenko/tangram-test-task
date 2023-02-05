<template>
  <div class="chat-header">
    <div class="chat-header-left">
      <ChatAvatar status="online" />

      <div class="chat-header-left__info">
        <h3>Mats Hummels</h3>
        <a href="#"
          ><b>Montage</b>, Mats Hummels, Platz 24 60594 Frankfurt a ...</a
        >
      </div>
    </div>

    <div class="chat-header-right">
      <div class="chat-header-members">
        <h3>Mitglieder:</h3>

        <div class="chat-header-members__plus">
          <div class="chat-header-members__plus-container">
            <PlusSvg />
          </div>
        </div>

        <div class="chat-header-members__member">
          <div class="chat-header-members__member-container">
            <ChatAvatar status="online" />
          </div>
        </div>

        <div class="chat-header-members__member">
          <div class="chat-header-members__member-container">
            <ChatAvatar status="offline" />
          </div>
        </div>

        <span>+4</span>
      </div>

      <div class="chat-header-right__line" />

      <div class="chat-header-right__params">
        <SettingFill />
      </div>
    </div>
  </div>
</template>

<script>
import ChatAvatar from '@/components/templates/blocks/ChatAvatar.vue'
import { PlusSvg, SettingFill } from '~/assets/images/svg/index'

export default {
  components: { ChatAvatar, SettingFill, PlusSvg }
}
</script>

<style lang="scss" scoped>
.chat-header {
  padding: 1.6rem 3.6rem 1.6rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;

  &-left {
    display: flex;
    align-items: center;

    &__info {
      margin-left: 1.6rem;
      margin-right: 1.5rem;

      h3 {
        font-size: 2rem;
        line-height: 24px;
        margin-bottom: 0.8rem;
        font-weight: 500;
      }

      a {
        font-size: 1.3rem;
        line-height: 16px;
        text-decoration: underline;
        color: #007aff;

        b {
          font-weight: 500;
        }
      }
    }
  }

  &-right {
    display: flex;
    align-items: center;

    &__line {
      height: 48px;
      width: 1px;
      background-color: #d9d9d9;
      margin-right: 3.6rem;
      margin-left: 1rem;
    }
  }

  &-members {
    display: flex;
    align-items: center;
    position: relative;

    h3 {
      font-size: 1.7rem;
      line-height: 20px;
      font-weight: 500;
      margin-right: 2rem;
    }
    &__plus {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 3;
      &-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        border: 1px solid #007aff;

        svg {
          color: #007aff;
        }
      }
    }

    &__member {
      position: relative;
      z-index: 2;

      right: 15px;

      &-container {
        background-color: #fff;
        border-radius: 50%;
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:nth-child(4) {
        right: 35px;
        z-index: 1;
      }
    }

    span {
      position: relative;
      right: 2.2rem;
      font-size: 1.3rem;
      line-height: 16px;
    }

    &__list {
      position: absolute;
      top: 100%;
      width: 280px;
      display: flex;
      right: 0;
      flex-direction: column;
    }
  }

  &__params {
    svg {
      color: #111111;
    }
  }
}
</style>
