<template>
  <div class="chat-navigation active">
    <ChatMenu v-if="isShowMenu" @changeTab="changeTab" @handleShowMenu="handleShowMenu" :currentTab="tab" />
    <Contacts v-if="!isShowMenu" @handleShowMenu="handleShowMenu" />

  </div>
</template>

<script>
import ChatMenu from "@/components/templates/chat-page/chat-navigation/chat-menu/ChatMenu.vue";
import Contacts from "@/components/templates/chat-page/chat-navigation/contacts/Contacts.vue";

export default {
  components: {Contacts, ChatMenu},

  data() {
    return {
      tab: 'chat',
      isShowMenu: true
    }
  },

  methods: {
    changeTab(tab) {
      this.tab = tab
      if(this.tab === 'chat') {
        this.isShowMenu = false
      }
    },

    handleShowMenu(status) {
      console.log('handleShowMenu', status)
      this.isShowMenu = status
      this.tab = 'chat'
    },
  }
}
</script>

<style lang="scss" scoped>
.chat-navigation {
  max-width: 384px;

  &.active {
    width: 100%;
  }
}
</style>
