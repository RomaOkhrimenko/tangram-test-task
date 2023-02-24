<template>
  <div class="chat-members" @mouseleave="handleShowMenu(false)">
    <h3>Mitglieder:</h3>

    <div class="chat-members__plus">
      <div class="chat-members__plus-container">
        <PlusSvg />
      </div>
    </div>

    <div class="chat-members__member">
      <div class="chat-members__member-container">
        <ChatAvatar status="online" />
      </div>
    </div>

    <div class="chat-members__member">
      <div class="chat-members__member-container">
        <ChatAvatar status="offline" />
      </div>
    </div>

    <span @mouseover="handleShowMenu(true)">+4</span>

    <div class="chat-members__menu" :class="isShowModal ? 'show' : ''">
      <div class="chat-members-user">
        <ChatAvatar status="online" />
        <div class="chat-members-user__info">
          <h3>Vorname und Nachname</h3>
          <span>Monteur</span>
        </div>
      </div>

      <div class="chat-members-user">
        <ChatAvatar status="online" />
        <div class="chat-members-user__info">
          <h3>Vorname und Nachname</h3>
          <span>Monteur</span>
        </div>
      </div>

      <div class="chat-members-user">
        <ChatAvatar status="online" />
        <div class="chat-members-user__info">
          <h3>Vorname und Nachname</h3>
          <span>Monteur</span>
        </div>
      </div>

      <div class="chat-members-user">
        <ChatAvatar status="online" />
        <div class="chat-members-user__info">
          <h3>Vorname und Nachname</h3>
          <span>Monteur</span>
        </div>
      </div>
      <div class="chat-members-user">
        <ChatAvatar status="online" />
        <div class="chat-members-user__info">
          <h3>Vorname und Nachname</h3>
          <span>Monteur</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatAvatar from '@/modules/chat/components/blocks/ChatAvatar.vue'
import { PlusSvg } from 'assets/images/svg'

export default {
  components: { ChatAvatar, PlusSvg },

  data() {
    return {
      isShowModal: false
    }
  },

  methods: {
    handleShowMenu(status) {
      this.isShowModal = status
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-members {
  display: flex;
  align-items: center;
  position: relative;
  & > h3 {
    font-size: 1.7rem;
    line-height: 20px;
    font-weight: 500;
    margin-right: 2rem;
    margin-left: 4rem;
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
    z-index: 2;
    margin-left: -18px;

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
      z-index: 1;
    }
  }

  & > span {
    position: relative;
    font-size: 1.3rem;
    line-height: 16px;
    margin-left: 0.8rem;
    cursor: pointer;
  }

  &__menu {
    position: absolute;
    top: 100%;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 8px 16px #11111129;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    padding: 2.4rem;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 10;
    &.show {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &-user {
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    .chat-avatar {
      transform: scale(0.9);
      margin-right: 1.6rem;
    }

    &__info {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 1.6rem;
        line-height: 20px;
        margin-bottom: 0.4rem;
      }

      span {
        font-size: 1.3rem;
        line-height: 16px;
        color: #111;
      }
    }
  }
}
</style>
