<template>
  <div class="contacts-group">
    <div class="contacts-group__title">
      <h3>{{title}}</h3>
    </div>

    <div class="contacts-group__container">
      <GroupBlock :isActive="true" />
      <GroupBlock :isActive="false" />
      <GroupBlock :isActive="false" />
      <GroupBlock :isActive="false" />
    </div>
  </div>
</template>

<script>
import GroupBlock from "@/components/templates/chat-page/chat-navigation/contacts/blocks/GroupBlock.vue";

export default {
  components: {GroupBlock},
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts-group {
  padding: 0 2.4rem;
  margin-bottom: 3.2rem;
  &__title {
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 0.8rem;
    margin-bottom: 1.6rem;
    h3 {
      color: #111111;
      font-size: 1.3rem;
      line-height: 16px;
      opacity: 0.4;
    }
  }
}
</style>
