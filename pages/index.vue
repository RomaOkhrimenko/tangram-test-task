<template>
  <section class="container chat-page">
    <ChatMenu />
    <Chat/>
    <ChatCatalog />
  </section>
</template>

<script lang="js">
import ChatMenu from "~/components/templates/section/chat/chat-menu/ChatMenu.vue";
import Chat from "~/components/templates/section/chat/chat/Chat.vue";
import ChatCatalog from "~/components/templates/section/chat/chat-catalog/ChatCatalog.vue";

export default {
  components: {ChatCatalog, Chat, ChatMenu}
}
</script>

<style lang="scss" scoped>
.chat-page {
  display: flex;
  justify-content: space-between;
}
</style>
