<template>
  <div class="contacts">
    <ContactsHeader @handleShowMenu="handleShowMenu" />
    <div class="contacts__container">
      <ContactsGroup title="Private Gruppen" />
      <ContactsGroup title="Persönlicher Chat" />
    </div>
  </div>
</template>

<script>
import ContactsHeader from '@/components/templates/chat-page/chat-navigation/contacts/contacts-header/ContactsHeader.vue'
import ContactsGroup from '@/components/templates/chat-page/chat-navigation/contacts/contacts-group/ContactsGroup.vue'

export default {
  components: { ContactsGroup, ContactsHeader },

  methods: {
    handleShowMenu(status) {
      this.$emit('handleShowMenu', status)
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  &__container {
    overflow-y: auto;
    height: calc(100vh - 112px - 132px);
    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>
