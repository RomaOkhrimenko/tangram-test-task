<template>
  <div ref="messages" class="messages">
    <Message
      :message="[{ message: 'My message' }]"
      time="10:00AM"
      :myMessage="true"
    />
    <Message
      :message="[
        {
          message: 'I like this kitchen'
        },
        {
          message_image:
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
      ]"
      time="10:13AM"
      :myMessage="true"
    />
    <Message
      :message="[
        {
          message:
            'Lorem Ipsum ist ein einfacher Demo-Text für die Print- und\n' +
            '          Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der\n' +
            '          Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine\n' +
            '          Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch\n' +
            '          zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch\n' +
            '          in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke,\n' +
            '          nahezu unverändert)'
        },
        {
          message_image:
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80'
        }
      ]"
      time="10:23AM"
    />
  </div>
</template>

<script>
import Message from '@/components/templates/chat-page/chat/messages/Message.vue'

export default {
  components: { Message },

  mounted() {
    this.$refs.messages.scrollTo(0, this.$refs.messages.offsetHeight)
  }
}
</script>

<style lang="scss" scoped>
.messages {
  display: inline-flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  padding: 2.8rem 11.2rem;

  @media (max-width: 1440px) {
    padding: 2rem 7rem;
  }

  @media (max-width: 554px) {
    padding: 2rem 2rem;
  }

  .message {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
