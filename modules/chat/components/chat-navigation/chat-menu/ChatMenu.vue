<template>
  <div class="chat-menu" :class="{ active: getShowChatMenuStatus }">
    <div class="chat-menu-header">
      <div class="chat-menu-header__user">
        <div class="chat-menu-header__user-img">
          <img src="~/assets/images/png/avatar.png" alt="" />

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
        <button
          @click="handleShowChatMenu(false)"
          class="chat-menu-header__close"
        >
          <CloseSvg />
        </button>
      </div>
    </div>

    <div class="chat-menu-navigates">
      <ChatMenuNavigate
        title="Chat"
        link="chat"
        :isActive="'chat' === getCurrentTab"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g id="messages-2" transform="translate(-428 -250)">
            <path
              class="chat-menu-navigate__ico-opacity"
              id="Vector"
              d="M14.13,14.83l.39,3.16a1,1,0,0,1-1.5.98L8.83,16.48a9.982,9.982,0,0,1-1.35-.09,4.861,4.861,0,0,0,1.18-3.16,5.327,5.327,0,0,0-5.5-5.14A5.683,5.683,0,0,0,.04,9,6.339,6.339,0,0,1,0,8.24C0,3.69,3.95,0,8.83,0s8.83,3.69,8.83,8.24A8.054,8.054,0,0,1,14.13,14.83Z"
              transform="translate(432.34 252)"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M11,5.14A4.861,4.861,0,0,1,9.82,8.3,5.584,5.584,0,0,1,5.5,10.27L2.89,11.82a.625.625,0,0,1-.94-.61L2.2,9.24A4.988,4.988,0,0,1,0,5.14,5.023,5.023,0,0,1,2.38.91,5.683,5.683,0,0,1,5.5,0,5.327,5.327,0,0,1,11,5.14Z"
              transform="translate(430 260.09)"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g></svg
      ></ChatMenuNavigate>
      <ChatMenuNavigate
        title="Neue Gruppe"
        link="neue-gruppe"
        :isActive="'neue-gruppe' === getCurrentTab"
      >
        <svg
          id="profile-2user"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            id="Vector"
            d="M4.6,8.87a1.818,1.818,0,0,0-.33,0,4.445,4.445,0,1,1,.33,0Z"
            transform="translate(4.56 2)"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            class="chat-menu-navigate__ico-opacity"
            id="Vector-2"
            data-name="Vector"
            d="M.13,0a3.5,3.5,0,0,1,3.5,3.5A3.5,3.5,0,0,1,.26,7,1.129,1.129,0,0,0,0,7"
            transform="translate(16.28 4)"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M1.815,1.373c-2.42,1.62-2.42,4.26,0,5.87a9.766,9.766,0,0,0,10.01,0c2.42-1.62,2.42-4.26,0-5.87A9.812,9.812,0,0,0,1.815,1.373Z"
            transform="translate(2.345 13.188)"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            class="chat-menu-navigate__ico-opacity"
            id="Vector-4"
            data-name="Vector"
            d="M0,6a4.837,4.837,0,0,0,1.96-.87,2.533,2.533,0,0,0,0-4.27A4.973,4.973,0,0,0,.03,0"
            transform="translate(18.34 14)"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Vector-5"
            data-name="Vector"
            d="M0,0H24V24H0Z"
            transform="translate(24 24) rotate(180)"
            fill="none"
            opacity="0"
          />
        </svg>
      </ChatMenuNavigate>
      <ChatMenuNavigate
        title="Kontakte"
        link="kontakte"
        :isActive="'kontakte' === getCurrentTab"
      >
        <svg
          id="user-octagon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            class="chat-menu-navigate__ico-opacity"
            id="Vector"
            d="M18.17,6.58v6.84a3.174,3.174,0,0,1-1.57,2.73l-5.94,3.43a3.163,3.163,0,0,1-3.15,0L1.57,16.15A3.15,3.15,0,0,1,0,13.42V6.58A3.174,3.174,0,0,1,1.57,3.85L7.51.42a3.163,3.163,0,0,1,3.15,0L16.6,3.85A3.162,3.162,0,0,1,18.17,6.58Z"
            transform="translate(2.91 2)"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <g id="Group" transform="translate(8 6.34)">
            <path
              id="Vector-2"
              data-name="Vector"
              d="M4.66,2.33A2.33,2.33,0,1,1,2.33,0,2.33,2.33,0,0,1,4.66,2.33Z"
              transform="translate(1.67)"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M8,3.26C8,1.46,6.21,0,4,0S0,1.46,0,3.26"
              transform="translate(0 7.06)"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
          <path
            id="Vector-4"
            data-name="Vector"
            d="M0,0H24V24H0Z"
            fill="none"
            opacity="0"
          />
        </svg>
      </ChatMenuNavigate>
      <ChatMenuNavigate
        title="Parameter"
        link="parameter"
        :isAnimate="true"
        :isActive="'parameter' === getCurrentTab"
      >
        <svg
          id="setting-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            id="Vector"
            d="M6,3A3,3,0,1,1,3,0,3,3,0,0,1,6,3Z"
            transform="translate(9 9)"
            fill="none"
            class="chat-menu-navigate__ico-opacity"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M0,10.319V8.559a1.906,1.906,0,0,1,1.9-1.9c1.81,0,2.55-1.28,1.64-2.85a1.9,1.9,0,0,1,.7-2.59L5.97.229a1.669,1.669,0,0,1,2.28.6l.11.19c.9,1.57,2.38,1.57,3.29,0l.11-.19a1.669,1.669,0,0,1,2.28-.6l1.73.99a1.9,1.9,0,0,1,.7,2.59c-.91,1.57-.17,2.85,1.64,2.85a1.906,1.906,0,0,1,1.9,1.9v1.76a1.906,1.906,0,0,1-1.9,1.9c-1.81,0-2.55,1.28-1.64,2.85a1.9,1.9,0,0,1-.7,2.59l-1.73.99a1.669,1.669,0,0,1-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29,0l-.11.19a1.669,1.669,0,0,1-2.28.6l-1.73-.99a1.9,1.9,0,0,1-.7-2.59c.91-1.57.17-2.85-1.64-2.85A1.906,1.906,0,0,1,0,10.319Z"
            transform="translate(2 2.561)"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M0,0H24V24H0Z"
            fill="none"
            opacity="0"
          />
        </svg>
      </ChatMenuNavigate>
    </div>
  </div>
</template>

<script>
import Messages from 'assets/images/svg/messages-2.svg'
import ChatMenuNavigate from '@/modules/chat/components/chat-navigation/chat-menu/ChatMenuNavigate.vue'
import { CloseSvg, LeftArrowSvg } from 'assets/images/svg'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    ChatMenuNavigate,
    Messages,
    CloseSvg,
    LeftArrowSvg
  },

  methods: {
    ...mapMutations('chat', ['handleShowChatMenu'])
  },
  computed: {
    ...mapGetters('chat', ['getCurrentTab', 'getShowChatMenuStatus'])
  }
}
</script>

<style lang="scss" scoped>
.chat-menu {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #fdfdfd;
  height: 100%;
  transition: transform 0.5s, opacity 0.3s;
  transform: translateX(-100%);
  pointer-events: none;
  z-index: 11;

  @media (max-width: 992px) {
    border-right: 2px solid #d9d9d9;
  }

  @media (max-width: 767px) {
    border: 0;
  }

  &.active {
    transform: translateX(0);
    pointer-events: auto;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 2.2rem 1.6rem;
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
        background-color: #fdfdfd;
      }
      &-online {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #007b29;
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
      background-color: #eaeaea;
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
