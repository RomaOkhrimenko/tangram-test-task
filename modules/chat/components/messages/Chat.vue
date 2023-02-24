<template>
  <div class="chat">
    <MessagesHeader />
    <Messages />
    <MessageInput />
  </div>
</template>

<script>
import MessagesHeader from '@/modules/chat/components/messages/messages-header/MessagesHeader.vue'
import Messages from '@/modules/chat/components/messages/messages/Messages.vue'
import MessageInput from '@/modules/chat/components/messages/message-input/MessageInput.vue'
import ChatMenu from '@/modules/chat/components/chat-navigation/chat-menu/ChatMenu.vue'

export default {
  components: { ChatMenu, MessageInput, Messages, MessagesHeader }
}
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;

  background-color: #fff;
  box-shadow: -4px 0px 16px #11111114;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
</style>
