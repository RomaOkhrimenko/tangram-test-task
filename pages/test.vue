<template>
  <div class="test">
    <div class="test__buttons">
      <button @click="handleClosedProjectModalStatus(true)">
        Closed Projekt
      </button>
      <Debate />
    </div>

    <div>
      <DebateMessage v-if="getDebateStatus" />
    </div>

    <div>
      <ChatCongratiulationsAlert />
    </div>

    <ModalWrapper
      :is-active="getClosedProjectModalStatus"
      @handleShowModal="handleClosedProjectModalStatus"
    >
      <ProjectRatingModals />
    </ModalWrapper>
  </div>
</template>

<script>
import InputDropdown from '@/components/ui/InputDropdown.vue'
import ProjectRatingModals from '@/components/templates/modals/ProjectRatingModals.vue'
import ChatCongratiulationsAlert from '@/components/templates/chat-page/alerts/ChatCongratiulationsAlert.vue'
import Debate from '@/components/templates/chat-page/chat/debate/Debate.vue'
import DebateMessage from '@/components/templates/chat-page/chat/messages/DebateMessage.vue'
import { mapGetters, mapMutations } from 'vuex'
import ModalWrapper from '@/components/templates/modals/ModalWrapper.vue'

export default {
  components: {
    ModalWrapper,
    DebateMessage,
    Debate,
    ChatCongratiulationsAlert,
    ProjectRatingModals,
    InputDropdown
  },

  data() {
    return {
      isShowCongratulations: false,
      isShowClosedProject: false,
      isSoMessage: false
    }
  },

  computed: {
    ...mapGetters('chat', ['getDebateStatus', 'getClosedProjectModalStatus'])
  },

  methods: {
    ...mapMutations('chat', ['handleClosedProjectModalStatus'])
  }
}
</script>

<style lang="scss" scoped>
.test__buttons {
  display: flex;
  gap: 2rem;
  margin: 2rem;

  button {
    padding: 1rem;
    border-radius: 20px;
    border: 1px solid #007aff;
    color: #fff;
    background-color: #007aff;
  }
}
</style>
