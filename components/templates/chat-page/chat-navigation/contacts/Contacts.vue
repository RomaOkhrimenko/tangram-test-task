<template>
  <div>
    <ContactsHeader />
    <ContactsGroup />
  </div>
</template>

<script>
import ContactsHeader
  from "@/components/templates/chat-page/chat-navigation/contacts/contacts-header/ContactsHeader.vue";
import ContactsGroup from "@/components/templates/chat-page/chat-navigation/contacts/contacts-group/ContactsGroup.vue";

export default {
  components: {ContactsGroup, ContactsHeader}

}
</script>

<style lang="scss" scoped>

</style>
