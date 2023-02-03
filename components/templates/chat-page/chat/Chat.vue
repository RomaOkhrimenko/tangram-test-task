<template>
  <div class="chat">
    <ChatHeader />
      <Messages />
      <MessageInput />
  </div>
</template>

<script>
import ChatHeader from "@/components/templates/chat-page/chat/chat-header/ChatHeader.vue";
import Messages from "@/components/templates/chat-page/chat/messages/Messages.vue";
import MessageInput from "@/components/templates/chat-page/chat/message-input/MessageInput.vue";

export default {
  components: {MessageInput, Messages, ChatHeader}

}
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  background-color: #fff;
  box-shadow: -4px 0px 16px #11111114;
}
</style>
