<template>
  <div class="chat-header">
    <div class="chat-header-left">
      <div class="chat-header__menu d-m-none-lg" @click="handleShowMenu(true)">
        <BurgerMenuSvg />
      </div>

      <div class="chat-header-left__line d-m-none-lg" />

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
      <button
        class="chat-header-right__params d-none-xxl"
        :class="getShowSettingsStatus ? 'active' : ''"
        @click="handleSettingsStatus(!getShowSettingsStatus)"
      >
        <SettingFill />
      </button>

      <button
        class="chat-header-right__settings d-m-none-xl"
        :class="getShowMoreStatus ? 'active' : ''"
        @click="handleShowMore(!getShowMoreStatus)"
      >
        <ThreeVerticalDotSvg />
      </button>
    </div>

    <ChatSettings class="d-none-xxl" />

    <div
      class="chat-header-settings d-m-none-xl"
      :class="{ active: getShowMoreStatus }"
    >
      <span @click="handleShowChatInfo(true)"><SettingEmpty />Info</span>
    </div>

    <ModalWrapper
      :isActive="isShowChatInfo"
      @handleShowModal="handleShowChatInfo"
    >
      <slot><ChatInfo @handleShowChatInfo="handleShowChatInfo"/></slot>
    </ModalWrapper>
  </div>
</template>

<script>
import ChatAvatar from '@/components/templates/blocks/ChatAvatar.vue'
import {
  PlusSvg,
  SettingEmpty,
  ThreeVerticalDotSvg,
  FolderOpenSvg,
  NoteLockSvg,
  SettingFill,
  BurgerMenuSvg
} from '~/assets/images/svg/index'
import ChatMembers from '@/components/templates/chat-page/chat/chat-header/ChatMembers.vue'
import ChatSettings from '~/components/templates/chat-page/chat/chat-header/ChatSettings.vue'
import ModalWrapper from '@/components/templates/modals/ModalWrapper.vue'
import ChatInfo from '@/components/templates/chat-page/chat-info/ChatInfoModal.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    ChatInfo,
    ModalWrapper,
    ChatSettings,
    ChatMembers,
    ChatAvatar,
    SettingEmpty,
    PlusSvg,
    ThreeVerticalDotSvg,
    FolderOpenSvg,
    NoteLockSvg,
    SettingFill,
    BurgerMenuSvg
  },

  data() {
    return {
      isShowSettings: false,
      isShowChatInfo: false
    }
  },

  watch: {
    getShowMoreStatus() {
      if (this.getShowMoreStatus) {
        setTimeout(
          () => window.addEventListener('click', this.checkClickMore),
          0
        )
      } else {
        window.removeEventListener('click', this.checkClickMore)
      }
    }
  },

  computed: {
    ...mapGetters('chat', ['getShowSettingsStatus', 'getShowMoreStatus'])
  },

  methods: {
    ...mapMutations('chat', [
      'handleShowSettings',
      'handleShowMore',
      'handleShowMenu'
    ]),
    handleSettingsStatus(status) {
      this.handleShowSettings(status)
    },

    checkClickMore(e) {
      if (!e.target.closest('.chat-header-settings')) {
        this.handleShowMore(false)
      }
    },

    handleShowChatInfo(bool) {
      this.handleShowMore(false)
      this.isShowChatInfo = bool
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-header {
  padding: 1.6rem 3.6rem 1.6rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  position: relative;

  @media (max-width: 1200px) {
    padding: 1.6rem;
  }

  &-left {
    display: flex;
    align-items: center;

    &__info {
      margin-left: 1.6rem;
      margin-right: 1.5rem;

      @media (max-width: 554px) {
        margin: 0 1rem;
      }

      h3 {
        font-size: 2rem;
        line-height: 24px;
        margin-bottom: 0.8rem;
        font-weight: 500;

        @media (max-width: 554px) {
          font-size: 1.4rem;
          margin-bottom: 0;
        }
      }

      a {
        font-size: 1.3rem;
        line-height: 16px;
        text-decoration: underline;
        color: #007aff;

        @media (max-width: 554px) {
          font-size: 1rem;
        }

        b {
          font-weight: 500;
        }
      }
    }

    &__line {
      height: 48px;
      width: 1px;
      background-color: #d9d9d9;
      margin-right: 3.2rem;
      margin-left: 3.6rem;

      @media (max-width: 554px) {
        margin: 0 1.5rem;
      }
    }
  }

  &-right {
    display: flex;
    align-items: center;
    position: relative;

    .chat-members {
      @media (max-width: 1439px) {
        display: none;
      }
    }

    &__line {
      height: 48px;
      width: 1px;
      background-color: #d9d9d9;
      margin-right: 3.6rem;
      margin-left: 3.2rem;

      @media (max-width: 554px) {
        margin: 0 1.5rem;
      }
    }

    &__params {
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;
      border-radius: 8px;
      border: none;

      @media (min-width: 1024px) {
        padding: 0.8rem;
        &:hover {
          background-color: rgba(111, 111, 111, 0.08);

          svg {
            transform: rotate(60deg);
          }
        }
      }

      &.active {
        background-color: #007aff;

        svg {
          color: #fff;
          transform: rotate(60deg);
        }
      }

      svg {
        transition: transform 0.3s;
      }
    }

    &__settings {
      padding: 0.8rem;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;
      border-radius: 8px;
      border: none;

      @media (min-width: 1024px) {
        &:hover {
          background-color: rgba(111, 111, 111, 0.08);
        }
      }

      &.active {
        background-color: #007aff;

        svg {
          color: #fff;
        }
      }
    }
  }

  &-settings {
    position: absolute;
    right: 3.6rem;
    background-color: #fff;
    top: 90%;
    display: flex;
    flex-direction: column;
    z-index: 10;
    padding: 1.6rem;
    box-shadow: 0 8px 16px #11111129;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.3s, transform 0.3s;

    @media (max-width: 554px) {
      top: 90%;
    }

    &.active {
      opacity: 1;
      transform: scale(1);
    }
    span {
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      cursor: pointer;

      &:hover {
        color: #007aff;
      }
      svg {
        margin-right: 1rem;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
