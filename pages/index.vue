<template>
  <section class="container chat-page">
    <ChatNavigation :class="{ open: isOpenMenu }" />
    <Chat @handleShowMenuStatus="handleShowMenuStatus" />
    <ChatCatalog class="d-none-xxl" />
    <!--    <NewGroup />-->
    <!--    <Contacts />-->
    <!--  <Parameters />-->
    <ProjectRatingModals />
  </section>
</template>

<script lang="js">
import Chat from "~/components/templates/chat-page/chat/Chat.vue";
import ChatCatalog from "~/components/templates/chat-page/chat-catalog/ChatCatalog.vue";
import ChatNavigation from "@/components/templates/chat-page/chat-navigation/ChatNavigation.vue";
import NewGroup from "@/components/templates/chat-page/new-group/NewGroup.vue";
import Contacts from "@/components/templates/chat-page/contacts/Contacts.vue";
import Parameters from "@/components/templates/chat-page/parameters/Parameters.vue";
import ProjectRatingModals from "@/components/templates/modals/ProjectRatingModals.vue";

export default {
  components: {ProjectRatingModals, Parameters, Contacts, NewGroup, ChatNavigation, ChatCatalog, Chat},
  data() {
    return {
      isOpenMenu: false
    }
  },
  methods: {
    handleShowMenuStatus(status) {
      this.isOpenMenu = status
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-page {
  display: flex;
  height: calc(100vh - 112px);
  position: relative;
  @media (max-width: 992px) {
    .chat-navigation {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      z-index: 5;
      transform: translateX(-100%);
      transition: transform 0.3s;

      &.open {
        transform: translateX(0);
      }
    }

    .contacts {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: #fff;
    }
  }
}
</style>
