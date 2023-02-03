<template>
  <div class="chat-menu active">
      <div class="chat-menu-header">

        <div class="chat-menu-header__user">
          <div class="chat-menu-header__user-img">
            <img src="~/assets/images/png/avatar.png" alt="">

            <div class="chat-menu-header__user-status">
              <div class="chat-menu-header__user-online" />
            </div>
          </div>

          <div class="chat-menu-header__user-info">
            <h2>Mats Hummels</h2>
            <span>Chat-Menü</span>
          </div>
        </div>

        <div>
          <button @click="handleShowMenu" class="chat-menu-header__close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g id="close" transform="translate(-236 -252)">
                <path id="Vector" d="M0,12,12,0" transform="translate(242 258)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Vector-2" data-name="Vector" d="M12,12,0,0" transform="translate(242 258)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(236 252)" fill="none" opacity="0"/>
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div class="chat-menu-navigates">
        <ChatMenuNavigate @changeTab="changeTab" title="Chat" link="chat" :isActive="'chat' === currentTab"  />
        <ChatMenuNavigate @changeTab="changeTab" title="Neue Gruppe" link="neue-gruppe" :isActive="'neue-gruppe' === currentTab" />
        <ChatMenuNavigate @changeTab="changeTab" title="Kontakte" link="kontakte" :isActive="'kontakte' === currentTab" />
        <ChatMenuNavigate @changeTab="changeTab" title="Parameter" link="parameter" :isActive="'parameter' === currentTab" />
      </div>
  </div>
</template>

<script>
import Messages from '~/assets/images/svg/messages-2.svg'
import ChatMenuNavigate from "@/components/templates/chat-page/chat-navigation/chat-menu/ChatMenuNavigate.vue";

export default {
  components: {
    ChatMenuNavigate,
    Messages
  },

  props: {
    currentTab: {
      type: String,
      required: true
    }
  },

  methods: {
    changeTab(tab) {
      this.$emit('changeTab', tab)
    },
    handleShowMenu() {
      this.$emit('handleShowMenu', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-menu {
  background-color: #FDFDFD;
  height: 100%;

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 1.6rem;
    margin-bottom: 3.2rem;


    &__user {
      display: flex;
      &-img {
        width: 64px;
        height: 64px;
        position: relative;
        margin-right: 1.6rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
      &-status {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #FDFDFD;
      }
      &-online {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #007B29;
      }

      &-info {
        margin-top: 0.4rem;

        h2 {
          font-size: 2rem;
          line-height: 32px;
          font-weight: bold;

        }

        span {
          font-size: 1.3rem;
          font-weight: 600;
        }
      }


    }
    &__close {
      background-color: #EAEAEA;
      border-radius: 8px;
      border: 0;
      padding: 8px;

      svg {
        transition: opacity 0.3s;
      }

      &:hover {
        svg {
          opacity: 0.24;
        }
      }
    }
  }

  &-navigates {
    display: flex;
    flex-direction: column;
    width: 100%;


  }
}
</style>
