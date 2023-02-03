<template>
  <section class="container chat-page">
    <ChatNavigation />
    <Chat/>
    <ChatCatalog />
<!--    <NewGroup />-->
<!--    <Contacts />-->
<!--  <Parameters />-->
  </section>
</template>

<script lang="js">
import Chat from "~/components/templates/chat-page/chat/Chat.vue";
import ChatCatalog from "~/components/templates/chat-page/chat-catalog/ChatCatalog.vue";
import ChatNavigation from "@/components/templates/chat-page/chat-navigation/ChatNavigation.vue";
import NewGroup from "@/components/templates/chat-page/new-group/NewGroup.vue";
import Contacts from "@/components/templates/chat-page/contacts/Contacts.vue";
import Parameters from "@/components/templates/chat-page/parameters/Parameters.vue";

export default {
  components: {Parameters, Contacts, NewGroup, ChatNavigation, ChatCatalog, Chat}
}
</script>

<style lang="scss" scoped>
.chat-page {
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 112px);
}
</style>
