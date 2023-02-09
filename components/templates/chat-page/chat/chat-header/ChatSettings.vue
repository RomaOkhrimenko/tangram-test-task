<template>
  <div class="chat-settings" :class="isShowSettings ? 'active' : ''">
    <div class="chat-settings__header">
      <div class="chat-settings__header-members">
        Mitglieder
        <span>5</span>
      </div>
      <div class="chat-settings__header-apoint" @click="handleAppointAdmin">
        <span v-if="!isAppointAdmin">Ernennen Sie einen Administrator</span>

        <div v-if="isAppointAdmin">
          <span>Absagen</span>
          <CloseSvg />
        </div>
      </div>
    </div>

    <div class="chat-settings__clients">
      <h3>Auftraggeber</h3>
      <div class="chat-settings__clients-line" />
      <div class="chat-settings__clients-container">
        <ChatSettingsClient
          name="Du (Mats Hummels)"
          root="Administrator"
          :isAppointAdmin="isAppointAdmin"
        />
        <ChatSettingsClient
          name="Vorname und Nachname"
          :isAppointAdmin="isAppointAdmin"
        />
      </div>
    </div>

    <div class="chat-settings__invite">
      <h4>
        {{
          isAppointAdmin
            ? 'Ernennen Sie einen Administrator'
            : 'Benutzer einladen:'
        }}
      </h4>
      <InviteInput />
    </div>

    <div class="chat-settings__contractors" v-if="!isAppointAdmin">
      <h3>Auftragnehmer</h3>
      <div class="chat-settings__contractors-line" />
      <div class="chat-settings__contractors-container">
        <div class="chat-settings-contractor">
          <ChatAvatar status="online" />

          <div class="chat-settings-contractor__info">
            <h3>Vorname und Nachname</h3>
            <span>Monteur</span>
          </div>
        </div>

        <div class="chat-settings-contractor">
          <ChatAvatar status="online" />

          <div class="chat-settings-contractor__info">
            <h3>Vorname und Nachname</h3>
            <span>Monteur</span>
          </div>
        </div>

        <div class="chat-settings-contractor">
          <ChatAvatar status="online" />

          <div class="chat-settings-contractor__info">
            <h3>Vorname und Nachname</h3>
            <span>Monteur</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isAppointAdmin" class="chat-settings__button">
      <button>AKZEPTIEREN</button>
    </div>
  </div>
</template>

<script>
import ChatAvatar from '~/components/templates/blocks/ChatAvatar.vue'
import InviteInput from '~/components/templates/chat-page/chat/invite-input/InviteInput.vue'
import ChatSettingsClient from '~/components/templates/chat-page/chat/chat-header/ChatSettingsClient.vue'
import { CloseSvg } from '~/assets/images/svg'

export default {
  components: { ChatSettingsClient, InviteInput, ChatAvatar, CloseSvg },

  props: {
    isShowSettings: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      isAppointAdmin: false
    }
  },

  methods: {
    handleAppointAdmin() {
      this.isAppointAdmin = !this.isAppointAdmin
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-settings {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  padding: 3.2rem 2.4rem;
  background: #fff;
  box-shadow: 0 8px 16px #11111129;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: auto;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.2rem;

    &-members {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      line-height: 24px;

      span {
        margin-left: 0.8rem;
        color: #fdfdfd;
        font-weight: 500;
        line-height: 16px;
        font-size: 1.3rem;
        background-color: #111;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &-apoint {
      cursor: pointer;
      user-select: none;

      & > span {
        font-size: 1.2rem;
        line-height: 16px;
        color: #007aff;
      }

      div {
        display: flex;
        align-items: center;
        color: #111111;
        opacity: 0.32;

        span {
          font-weight: 600;
          margin-right: 0.4rem;
          font-size: 1.3rem;
          margin-bottom: 0.2rem;
        }

        svg {
          transform: scale(0.7);
        }
      }
    }
  }

  &__clients {
    margin-bottom: 3.2rem;
    h3 {
      font-size: 1.3rem;
      line-height: 16px;
      color: #111111;
      opacity: 0.4;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }

    &-line {
      height: 1px;
      width: 100%;
      background-color: #d9d9d9;
      margin-bottom: 1.6rem;
    }

    &-container {
      display: flex;
      flex-direction: column;
    }
  }

  &__invite {
    margin-bottom: 3.2rem;
    h4 {
      color: #111111;
      font: normal normal medium 13px/24px;
      margin-bottom: 0.8rem;
    }
  }

  &__contractors {
    & > h3 {
      font-size: 1.3rem;
      line-height: 16px;
      color: #111111;
      opacity: 0.4;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }

    &-line {
      height: 1px;
      width: 100%;
      background-color: #d9d9d9;
      margin-bottom: 1.6rem;
    }
  }

  &-contractor {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;

    &:last-child {
      margin-bottom: 0;
    }

    .chat-avatar {
      transform: scale(0.86);
    }

    &__info {
      display: flex;
      flex-direction: column;
      margin-left: 1.6rem;
      h3 {
        font-size: 1.7rem;
        line-height: 20px;
        font-weight: 500;
        margin-bottom: 0.4rem;
      }

      span {
        font-size: 1.3rem;
        line-height: 16px;
        color: #111;
        font-weight: 400;
      }
    }
  }

  &__button {
    display: flex;
    justify-content: flex-end;

    button {
      border: none;
      padding: 1rem 2.4rem;
      color: #fff;
      background: #007aff;
      border-radius: 24px;
      font-size: 1.7rem;
      line-height: 20px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>
