<template>
  <div class="record">
    <div>
      <button
        class="record__microphone"
        :class="{
          stop: microphoneStatus === 'stop',
          on: microphoneStatus === 'on'
        }"
      >
        <MicrophoneSlashSvg
          @click="handleMicrophoneStatus('on')"
          v-if="microphoneStatus === 'off'"
        />
        <WorkMicrophoneSvg
          @click="handleMicrophoneStatus('stop')"
          v-if="microphoneStatus === 'on'"
        />
        <MicrophoneSlashSvg
          @click="handleMicrophoneStatus('off')"
          v-if="microphoneStatus === 'stop'"
        />
      </button>
    </div>

    <div class="record__info">
      <span
        class="record__placeholder"
        v-if="placeholder"
        :class="{
          active: microphoneStatus === 'off',
          hide: microphoneStatus === 'on'
        }"
        >{{ placeholder }}</span
      >
      <span
        class="record__time"
        :class="{
          active: microphoneStatus === 'on',
          hide: microphoneStatus === 'stop'
        }"
        >{{ minutes }}:{{ seconds }}</span
      >
      <div
        class="record__result"
        :class="{
          active: microphoneStatus === 'stop',
          hide: microphoneStatus === 'off'
        }"
      >
        <span>Ihre Nachricht:</span>
        <b>{{ minutes }}:{{ seconds }}</b>

        <CloseCircle @click="handleMicrophoneStatus('off')" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  MicrophoneSlashSvg,
  SentMessageSvg,
  WorkMicrophoneSvg,
  CloseCircle
} from 'assets/images/svg'

export default {
  components: {
    SentMessageSvg,
    MicrophoneSlashSvg,
    WorkMicrophoneSvg,
    CloseCircle
  },

  props: {
    microphoneStatus: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    }
  },

  data() {
    return {
      seconds: '00',
      minutes: '00',
      totalSeconds: 0,
      timer: {}
    }
  },

  methods: {
    handleMicrophoneStatus(status) {
      this.$emit('handleMicrophoneStatus', status)

      if (status === 'on') this.start()
      if (status === 'stop') this.pause()
      if (status === 'off') this.reset()
    },

    pad(val) {
      const valString = val + ''
      if (valString.length < 2) {
        return '0' + valString
      } else {
        return valString
      }
    },

    setTime() {
      ++this.totalSeconds
      this.seconds = this.pad(this.totalSeconds % 60)
      this.minutes = this.pad(parseInt(this.totalSeconds / 60))
    },

    start() {
      this.timer = setInterval(this.setTime, 1000)
    },
    pause() {
      clearInterval(this.timer)
    },
    reset() {
      this.seconds = '00'
      this.minutes = '00'
      this.totalSeconds = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.record {
  display: flex;
  align-items: center;
  &__microphone {
    background: rgba(111, 111, 111, 0.24);
    padding: 0.8rem;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    border: 0;

    transition: background-color 0.3s, color 0.3s;
    &.stop {
      background-color: #000;
      color: #fff;
    }

    &.on {
      background-color: #007aff;
      color: #fff;
    }
  }

  &__info {
    z-index: 2;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-right: -1rem;
  }

  &__placeholder {
    display: inline-block;
    font-size: 1.3rem;
    line-height: 24px;
    transition-delay: 0.2s;
    margin-right: -11rem;
    transform: translateY(15px);
    opacity: 0;
    z-index: 10;
    transition: transform 0.3s, opacity 0.3s;

    &.active {
      transform: translateY(0);
      opacity: 0.56;
    }

    &.hide {
      transform: translateY(-15px);
      opacity: 0;
    }
  }

  &__time {
    display: inline-block;
    font-size: 1.3rem;
    line-height: 24px;
    transition-delay: 0.2s;
    margin-right: -4rem;
    transform: translateY(15px);
    opacity: 0;
    z-index: 10;
    transition: transform 0.3s, opacity 0.3s;

    &.active {
      transform: translateY(0);
      opacity: 1;
    }

    &.hide {
      transform: translateY(-15px);
      opacity: 0;
    }
  }

  &__result {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-right: -20rem;
    font-size: 1.3rem;
    margin-left: 0.5rem;
    line-height: 24px;
    transform: translateY(15px);
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;

    &.active {
      transform: translateY(0);
      opacity: 1;
    }

    &.hide {
      transform: translateY(-15px);
      opacity: 0;
    }

    span {
      margin-right: 0.5rem;
    }

    b {
      margin-right: 1.6rem;
    }

    svg {
      cursor: pointer;
    }
  }
}
</style>
