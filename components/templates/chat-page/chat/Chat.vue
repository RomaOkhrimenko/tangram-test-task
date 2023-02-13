<template>
  <div class="chat">
    <ChatHeader />
    <Messages />
    <MessageInput />
  </div>
</template>

<script>
import ChatHeader from '@/components/templates/chat-page/chat/chat-header/ChatHeader.vue'
import Messages from '@/components/templates/chat-page/chat/messages/Messages.vue'
import MessageInput from '@/components/templates/chat-page/chat/message-input/MessageInput.vue'
import ChatMenu from '@/components/templates/chat-page/chat-navigation/chat-menu/ChatMenu.vue'

export default {
  components: { ChatMenu, MessageInput, Messages, ChatHeader }
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
