<template>
  <div class="message-input">
    <div class="message-input-container">
      <div class="message-input-top">
        <div class="message-input-customize">
          <div class="message-input-customize__opener">
            <PlusSvg />
          </div>
        </div>

        <div class="message-input-options">
          <div class="message-input-report">
            <MessageDangerSvg />
            Vorfall Melden
          </div>

          <ProjectStatus />
        </div>
      </div>
      <div class="message-input-bottom">
        <Microphone
          @handleMicrophoneStatus="handleMicrophoneStatus"
          :microphoneStatus="microphoneStatus"
        />
        <div class="message-input__input">
          <div
            class="hide"
            :class="{
              animate: microphoneStatus === 'on' || microphoneStatus === 'stop'
            }"
          ></div>
          <input
            v-model="message"
            type="text"
            placeholder="Beginnen Sie mit dem Schreiben oder ziehen Sie Dateien in Ihre Notiz"
          />
        </div>
        <div class="message-input-attachment">
          <PaperClipSvg />
        </div>
        <div class="message-input-sent">
          <SentMessageSvg />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SentMessageSvg,
  PaperClipSvg,
  MicrophoneSlashSvg,
  PlusSvg,
  MessageDangerSvg,
  WorkMicrophoneSvg
} from '~/assets/images/svg'
import ProjectStatus from '@/components/templates/chat-page/chat/project-status/ProjectStatus.vue'
import Microphone from '@/components/templates/chat-page/chat/message-input/Microphone.vue'
export default {
  components: {
    Microphone,
    ProjectStatus,
    SentMessageSvg,
    PaperClipSvg,
    MicrophoneSlashSvg,
    MessageDangerSvg,
    PlusSvg,
    WorkMicrophoneSvg
  },

  data() {
    return {
      message: '',
      microphoneStatus: 'off'
    }
  },
  methods: {
    handleMicrophoneStatus(status) {
      this.microphoneStatus = status
    }
  }
}
</script>

<style lang="scss" scoped>
.message-input {
  width: 100%;
  margin: 0 auto 3.2rem auto;

  &-container {
    margin: 0 3.2rem;
    background-color: #fff;
    box-shadow: 0 8px 16px #11111129;
    border-radius: 20px;
    padding: 0.8rem;

    @media (max-width: 554px) {
      margin: 0 1rem;
    }
  }
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #dcdcdc;

    @media (max-width: 994px) {
      display: none;
    }
  }

  &-customize {
    &__opener {
      width: 40px;
      height: 40px;
      background-color: rgba(0, 122, 255, 0.16);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      cursor: pointer;
      color: #007aff;

      &:hover {
        svg {
          transform: rotate(45deg);
        }
      }

      svg {
        transition: transform 0.3s;
      }
    }
  }

  &-options {
    display: flex;
    align-items: center;
  }

  &-report {
    display: flex;
    align-items: center;
    opacity: 0.4;
    color: #111111;
    font-size: 1.3rem;
    line-height: 16px;
    padding: 0.8rem 3.2rem 0.8rem 1.6rem;
    margin-right: 0.8rem;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.3s;

    svg {
      margin-right: 0.8rem;
    }

    &:hover {
      background-color: #f5f5f5;
      opacity: 1;
    }
  }

  &-bottom {
    display: flex;
    align-items: center;
    margin-top: 0.8rem;

    @media (max-width: 767px) {
      margin-top: 0;
    }

    .record {
      @media (max-width: 554px) {
        margin-right: 0.5rem;
        transform: scale(0.8);
        z-index: 10;
      }
    }
  }

  &__input {
    width: 100%;
    margin-right: 1rem;
    position: relative;

    @media (max-width: 554px) {
      margin-right: 0.5rem;
    }

    .hide {
      position: absolute;
      left: 0;
      height: 100%;
      background-color: #fff;
      width: 0;
      transition: width 1s;

      &.animate {
        width: 100%;
      }
    }
    input {
      padding: 1rem 0.5rem;
      width: 100%;
      height: 100%;
      font-size: 1.5rem;
      font-weight: 500;
      color: #111;
      outline: none;
      border: none;

      @media (max-width: 554px) {
        padding: 0;
      }
    }
  }

  &-attachment {
    color: #007aff;
    background-color: #007aff14;
    padding: 0.7rem;
    border: 1px solid #007aff;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s, color 0.3s;
    margin-right: 1.6rem;

    &:hover {
      transform: rotate(135deg);
      background-color: #007aff;
      color: #fff;
    }

    @media (max-width: 554px) {
      transform: scale(0.8);
      margin-right: 0.3rem;
    }
  }

  &-sent {
    color: #fff;
    background-color: #007aff;
    border-radius: 50%;
    padding: 1.1rem 0.9rem 1.1rem 1.3rem;
    cursor: pointer;

    @media (max-width: 554px) {
      transform: scale(0.8);
    }
  }
}
</style>
