<template>
  <div class="contacts" :class="{ active: !getShowChatMenuStatus }">
    <div class="contacts__wrapper" :class="{ active: !getShowChatMenuStatus }">
      <ContactsHeader @handleTab="handleTab" :currentTab="tab" />
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
  </div>
</template>

<script>
import ContactsHeader from '@/modules/chat/components/chat-navigation/contacts/contacts-header/ContactsHeader.vue'
import ContactsGroup from '@/modules/chat/components/chat-navigation/contacts/contacts-group/ContactsGroup.vue'
import Contact from '@/modules/chat/components/chat-navigation/contacts/blocks/Contact.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: { Contact, ContactsGroup, ContactsHeader },

  data() {
    return {
      tab: 'chat'
    }
  },

  methods: {
    ...mapMutations('chat', ['handleShowChatMenu']),
    handleTab(tab) {
      this.tab = tab
    }
  },

  computed: {
    ...mapGetters('chat', ['getShowChatMenuStatus'])
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  background-color: #fff;
  transition: background-color 0.5s;
  &.active {
    background-color: transparent;

    @media (max-width: 992px) {
      background-color: #fff;
    }
  }

  @media (max-width: 992px) {
    background-color: #fff;
    border-right: 2px solid #d9d9d9;
  }

  @media (max-width: 767px) {
    border: 0;
  }

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
