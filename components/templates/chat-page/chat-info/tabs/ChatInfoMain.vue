<template>
  <div class="chat-info">
    <div class="chat-info-header">
      <div class="chat-info-header__top">
        <h3>Chat Info</h3>
        <CloseSvg @click="handleShowChatInfo" />
      </div>

      <div class="chat-info-header__bottom">
        <img src="~/assets/images/png/avatar.png" alt="avatar" />

        <div>
          <h3>Mats Hummels</h3>
          <span>Online</span>
        </div>
      </div>
    </div>

    <div class="chat-info-tabs">
      <div class="chat-info-tabs__tab" @click="handleTab('information')">
        <NoteLockSvg />
        <span>Project Information</span>
      </div>
      <div class="chat-info-tabs__tab" @click="handleTab('catalog')">
        <FolderOpenSvg />
        <span>Katalog</span>
      </div>
    </div>

    <div class="chat-info-actions">
      <div class="chat-info-actions__action">
        <ShareSvg />
        <span>Share Contact</span>
      </div>
      <div class="chat-info-actions__action" @click="handleTab('settings')">
        <SettingEmpty />
        <span>Settings</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CloseSvg,
  FolderOpenSvg,
  NoteLockSvg,
  ShareSvg,
  SettingEmpty
} from '~/assets/images/svg'
export default {
  components: { CloseSvg, FolderOpenSvg, NoteLockSvg, ShareSvg, SettingEmpty },
  methods: {
    handleTab(status) {
      this.$emit('handleTab', status)
    },
    handleShowChatInfo() {
      this.$emit('handleShowChatInfo', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-info {
  &-header {
    padding-bottom: 3rem;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 2rem;
    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4rem;

      h3 {
        font-size: 1.8rem;
      }

      svg {
        cursor: pointer;
      }
    }

    &__bottom {
      display: flex;
      align-items: center;

      img {
        width: 100px;
        height: 100px;
        margin-right: 2rem;
        box-shadow: 0 0 10px #007b29;
        border-radius: 50%;
      }

      div {
        h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        span {
          color: #007b29;
          font-size: 1.3rem;
        }
      }
    }
  }

  &-tabs {
    padding-bottom: 3rem;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 2rem;
    &__tab {
      display: flex;
      align-items: center;
      margin-bottom: 1.6rem;
      cursor: pointer;
      padding: 1rem;
      border-radius: 18px;
      transition: color 0.3s, background-color 0.3s;

      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        background-color: #007aff;
        color: #fff;
      }
      svg {
        margin-right: 4rem;
        transform: scale(1.1);
      }

      span {
        font-size: 1.6rem;
      }
    }
  }

  &-actions {
    &__action {
      display: flex;
      align-items: center;
      margin-bottom: 1.6rem;
      cursor: pointer;
      padding: 1rem;
      border-radius: 18px;
      transition: color 0.3s, background-color 0.3s;

      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        background-color: #007aff;
        color: #fff;
      }
      svg {
        margin-right: 4rem;
        transform: scale(1.1);
      }

      span {
        font-size: 1.6rem;
      }
    }
  }
}
</style>
