<template>
  <div class="contacts">
    <ContactsHeader
      @handleShowMenu="handleShowMenu"
      @handleTab="handleTab"
      :currentTab="tab"
    />
    <div v-if="tab === 'chat'" class="contacts__container">
      <ContactsGroup title="Private Gruppen" />
      <ContactsGroup title="Persönlicher Chat" />
    </div>

    <div v-if="tab === 'contacts'" class="contacts__container">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  </div>
</template>

<script>
import ContactsHeader from '@/components/templates/chat-page/chat-navigation/contacts/contacts-header/ContactsHeader.vue'
import ContactsGroup from '@/components/templates/chat-page/chat-navigation/contacts/contacts-group/ContactsGroup.vue'
import Contact from '@/components/templates/chat-page/chat-navigation/contacts/blocks/Contact.vue'

export default {
  components: { Contact, ContactsGroup, ContactsHeader },

  data() {
    return {
      tab: 'chat'
    }
  },

  methods: {
    handleShowMenu(status) {
      this.$emit('handleShowMenu', status)
    },
    handleTab(tab) {
      this.tab = tab
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  &__container {
    overflow-y: auto;
    padding: 0 2.4rem;
    height: calc(100vh - 112px - 132px);
    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>
