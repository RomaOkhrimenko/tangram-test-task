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
      <ChatMembers />
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
import ChatMembers from '@/components/templates/chat-page/chat/chat-header/ChatMembers.vue'

export default {
  components: { ChatMembers, ChatAvatar, SettingFill, PlusSvg }
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
      margin-left: 3.2rem;
    }
  }

  &__params {
    svg {
      color: #111111;
    }
  }
}
</style>
