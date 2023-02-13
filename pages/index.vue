<template>
  <section class="container chat-page">
    <div class="chat-page__container">
      <ChatNavigation :class="{ open: getShowMenuStatus }" />
      <Chat />
      <ChatCatalog class="d-none-xxl" />

      <ModalWrapper
        :isActive="getClosedProjectModalStatus"
        @handleShowModal="handleClosedProjectModalStatus"
      >
        <ProjectRatingModals />
      </ModalWrapper>
    </div>
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
import {mapGetters, mapMutations} from "vuex";
import ModalWrapper from "@/components/templates/modals/ModalWrapper.vue";

export default {
  components: {ModalWrapper, ProjectRatingModals, Parameters, Contacts, NewGroup, ChatNavigation, ChatCatalog, Chat},
  methods: {
    ...mapMutations('chat', ['handleShowMenu', 'handleClosedProjectModalStatus']),
    checkMenuClick(e) {
      if(!e.target.closest('.chat-navigation')) {
        this.handleShowMenu(false)
      }
    }
  },
  computed: {
    ...mapGetters('chat', ['getShowMenuStatus', 'getCurrentTab', 'getClosedProjectModalStatus'])
  },
  watch: {
    getShowMenuStatus() {
      if(this.getShowMenuStatus) {
        setTimeout(() => window.addEventListener('click', this.checkMenuClick), 0)
      } else {
        window.removeEventListener('click', this.checkMenuClick)
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.chat-page {
  position: relative;
  @media (max-width: 992px) {
    .chat-navigation {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      z-index: 15;
      transform: translateX(-100%);
      transition: transform 0.5s;

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

  &__container {
    display: flex;
    height: calc(100vh - 112px);
    max-width: 2000px;
    margin: 0 auto;
  }
}
</style>
