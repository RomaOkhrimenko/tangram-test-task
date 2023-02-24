<template>
  <div class="chat-navigation">
    <ChatMenu />
    <Contacts />
  </div>
</template>

<script>
import ChatMenu from '@/modules/chat/components/chat-navigation/chat-menu/ChatMenu.vue'
import Contacts from '@/modules/chat/components/chat-navigation/contacts/Contacts.vue'
import ChatCatalog from '@/modules/chat/components/chat-catalog/ChatCatalog.vue'

export default {
  components: { ChatCatalog, Contacts, ChatMenu }
}
</script>

<style lang="scss" scoped>
.chat-navigation {
  max-width: 384px;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 1440px) {
    min-width: 305px;
    max-width: 305px;
  }

  @media (max-width: 994px) {
    max-width: 500px;
  }

  @media (max-width: 767px) {
    max-width: 800px;
  }
}
</style>
