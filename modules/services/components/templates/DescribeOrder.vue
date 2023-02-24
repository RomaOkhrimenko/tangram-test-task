<template>
  <div class="describe-order">
    <div class="describe-order__record">
      <slot name="microphone-title"></slot>
      <Microphone
        :microphoneStatus="microphoneStatus"
        :placeholder="'Sprachnachricht'"
        @handleMicrophoneStatus="handleMicrophoneStatus"
      />
    </div>
    <TextareaInput :placeholder="placeholder" />
  </div>
</template>

<script>
import Microphone from '@/modules/chat/components/messages/message-input/Microphone.vue'
import TextareaInput from '@/modules/services/components/inputs/TextareaInput.vue'
export default {
  components: { TextareaInput, Microphone },
  props: ['placeholder'],
  data() {
    return {
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
.describe-order {
  display: grid;
  align-items: center;
  grid-template-columns: 35% 65%;
  padding: 4.8rem 3.2rem;

  &__record {
    display: flex;
    flex-direction: column;
  }

  .textarea-input {
    width: 100%;
    max-width: 508px;
  }
}
</style>
