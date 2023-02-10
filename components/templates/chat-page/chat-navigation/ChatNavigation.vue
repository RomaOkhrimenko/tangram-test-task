<template>
  <div class="chat-navigation active">
    <ChatMenu
      :isShowMenu="isShowMenu"
      @changeTab="changeTab"
      @handleShowMenu="handleShowMenu"
      :currentTab="tab"
    />
    <Contacts @handleShowMenu="handleShowMenu" :isShowMenu="isShowMenu" />
  </div>
</template>

<script>
import ChatMenu from '@/components/templates/chat-page/chat-navigation/chat-menu/ChatMenu.vue'
import Contacts from '@/components/templates/chat-page/chat-navigation/contacts/Contacts.vue'
import ChatCatalog from '@/components/templates/chat-page/chat-catalog/ChatCatalog.vue'

export default {
  components: { ChatCatalog, Contacts, ChatMenu },

  data() {
    return {
      tab: 'chat',
      isShowMenu: true
    }
  },

  methods: {
    changeTab(tab) {
      this.tab = tab
      if (this.tab === 'chat') {
        this.isShowMenu = false
      }
    },

    handleShowMenu(status) {
      console.log('handleShowMenu', status)
      this.isShowMenu = status
      this.tab = 'chat'
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-navigation {
  max-width: 384px;
  position: relative;
  &::-webkit-scrollbar {
    width: 0;
  }

  &.active {
    width: 100%;
  }

  @media (max-width: 1440px) {
    min-width: 305px;
    max-width: 305px;
  }
}
</style>
